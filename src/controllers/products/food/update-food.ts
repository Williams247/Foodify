import { Request, Response } from "express";
import { FoodModel } from "@models";

export const updateFood = async (request: Request, response: Response) => {
  try {
    const {
      params: { id },
      body: { name, price, image, description },
    } = request;

    const food = await FoodModel.findByIdAndUpdate(id);
    if (food) {
      food.name = name ?? food.name;
      food.image = image ?? food.image;
      food.description = description ?? food.description;
      food.price = price ?? food.price;
      await food.save();
      response.status(200).json({ message: "Food updated" });
    }
  } catch (error) {
    response.status(500).json({ message: "Failed to update food" });
    console.log(error);
  }
};
