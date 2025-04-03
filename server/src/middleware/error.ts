import { Request, Response, NextFunction } from "express";

export const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction): Response => {
  console.error(err.stack);
  return res.status(500).json({ message: 'Something went wrong!', error: err.message });
};
