import { Request, Response } from "express";
import { Document } from "../models/Document";
import { User } from '../models/User';
import { IUser } from '../models/User';

export const createDocument = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { title, content, type } = req.body;
    const userId = req.user?._id;

    if (!userId) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const document = new Document({
      title,
      content,
      type,
      createdBy: userId
    });

    await document.save();
    return res.status(201).json(document);
  } catch (error) {
    return res.status(500).json({ message: 'Error creating document', error });
  }
};

export const getDocuments = async (req: Request, res: Response): Promise<Response> => {
  try {
    const userId = req.user?._id;
    if (!userId) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const documents = await Document.find({ createdBy: userId });
    return res.status(200).json(documents);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching documents', error });
  }
};

export const getDocument = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const userId = req.user?._id;

    if (!userId) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const document = await Document.findOne({ _id: id, createdBy: userId });
    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }

    return res.status(200).json(document);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching document', error });
  }
};

export const updateDocument = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const { title, content, type } = req.body;
    const userId = req.user?._id;

    if (!userId) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const document = await Document.findOneAndUpdate(
      { _id: id, createdBy: userId },
      { title, content, type },
      { new: true }
    );

    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }

    return res.status(200).json(document);
  } catch (error) {
    return res.status(500).json({ message: 'Error updating document', error });
  }
};

export const deleteDocument = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const userId = req.user?._id;

    if (!userId) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const document = await Document.findOneAndDelete({ _id: id, createdBy: userId });
    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }

    return res.status(200).json({ message: 'Document deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting document', error });
  }
};
