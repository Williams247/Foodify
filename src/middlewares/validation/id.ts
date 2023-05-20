import { Request, Response, NextFunction } from "express";
import { idPattern, invalidId } from "@utils";

export const validateId = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const id = request.params.id as string;

  if (!id.match(idPattern)) {
    response.status(422).json({ message: invalidId });
    return;
  }

  next();
};
