import { Request, Response } from "express";
import { CartModel } from "@models";
import { fetchById } from "@services";

export const fetchCartById = async (request: Request, response: Response) => {
  try {
    const {
      params: { id },
    } = request;
    const { status, data, message } = await fetchById({ model: CartModel, id });
    response.status(status).json({ message, data });
  } catch (error) {
    response.status(500).json({ message: "Failed to get carts" });
    console.log(error);
  }
};
