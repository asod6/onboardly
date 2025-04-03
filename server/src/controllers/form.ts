import { Request, Response } from "express";
import { Form } from "../models/Form";

export const createForm = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { title, fields, type } = req.body;
    const userId = req.user?._id;

    if (!userId) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const form = new Form({
      title,
      fields,
      type,
      createdBy: userId
    });

    await form.save();
    return res.status(201).json(form);
  } catch (error) {
    return res.status(500).json({ message: 'Error creating form', error });
  }
};

export const getForms = async (req: Request, res: Response): Promise<Response> => {
  try {
    const userId = req.user?._id;
    if (!userId) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const forms = await Form.find({ createdBy: userId });
    return res.status(200).json(forms);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching forms', error });
  }
};

export const getForm = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const userId = req.user?._id;

    if (!userId) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const form = await Form.findOne({ _id: id, createdBy: userId });
    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }

    return res.status(200).json(form);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching form', error });
  }
};

export const updateForm = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const { title, fields, type } = req.body;
    const userId = req.user?._id;

    if (!userId) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const form = await Form.findOneAndUpdate(
      { _id: id, createdBy: userId },
      { title, fields, type },
      { new: true }
    );

    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }

    return res.status(200).json(form);
  } catch (error) {
    return res.status(500).json({ message: 'Error updating form', error });
  }
};

export const deleteForm = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const userId = req.user?._id;

    if (!userId) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const form = await Form.findOneAndDelete({ _id: id, createdBy: userId });
    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }

    return res.status(200).json({ message: 'Form deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting form', error });
  }
};
