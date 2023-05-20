import { Request, Response } from "express";
import { CartModel, FoodModel } from "@models";
import { CartProps } from "@utils";
import { fetchById } from "@services";

export const addToCart = async (request: Request, response: Response) => {
  try {
    const {
      params: { id },
    } = request;

    const { status, data, message } = await fetchById({
      model: FoodModel,
      id,
    });

    if (status !== 200 && !data) {
      response.status(status).json({ message });
      return;
    }

    const cart = new CartModel<CartProps>({
      product: id,
      userId: request.user.id,
    });

    await cart.save();
    response.status(201).json({ message: "Food added to cart" });
  } catch (error) {
    response.status(500).json({ message: "Failed to add to cart" });
    console.log(error);
  }
};
