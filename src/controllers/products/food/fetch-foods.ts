import { Request, Response } from "express";
import { FoodModel } from "@models";

export const fetchFoods = async (request: Request, response: Response) => {
  try {
    const {
      params: { id },
    } = request;
    
    const foods = await FoodModel.find({ categoryId: id });
    console.log(id)
    response.status(200).json({ message: "Success", data: foods });
  } catch (error) {
    response.status(500).json({ message: "Failed to get foods" });
    console.log(error);
  }
};
