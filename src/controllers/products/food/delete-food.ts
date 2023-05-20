import { Request, Response } from "express";
import { FoodModel } from "@models";

export const deleteFood = async (request: Request, response: Response) => {
  try {
    const {
      params: { id },
    } = request;
    
    await FoodModel.findByIdAndDelete(id);
    response.status(200).json({ message: "Food deleted" });
  } catch (error) {
    response.status(500).json({ message: "Failed to delete food" });
    console.log(error);
  }
};
