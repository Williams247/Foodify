import { Request, Response } from "express";
import { CartModel } from "@models";

export const deleteCart = async (request: Request, response: Response) => {
  try {
    const {
      params: { id },
    } = request;
    await CartModel.findByIdAndDelete(id);
    response.status(200).json({ message: "Cart deleted" });
  } catch (error) {
    response.status(500).json({ message: "Failed to delete cart" });
    console.log(error);
  }
};
