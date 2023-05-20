import { Request, Response } from "express";
import { UserModel } from "@models";
import { fetchById } from "@services";

export const profile = async (request: Request, response: Response) => {
  try {
    const id = request.user.id;
    const { status, message, data } = await fetchById({ model: UserModel, id });
    response.status(status).json({ message, data });
  } catch (error) {
    response.status(500).json({ message: "Failed to get user profile" });
    console.log(error);
  }
};
