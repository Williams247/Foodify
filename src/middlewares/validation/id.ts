import { Request, Response, NextFunction } from "express";

export const validateId = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const id = request.params.id as string;

  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    response.status(422).json({ message: "Invalid id" });
    return;
  }

  next();
};
