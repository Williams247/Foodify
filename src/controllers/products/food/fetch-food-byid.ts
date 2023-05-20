import { Request, Response } from "express";
import { FoodModel } from "@models";
import { fetchById } from "@services";

// Find food by id
export const fetchFoodById = async (request: Request, response: Response) => {
  try {
    const {
      params: { id },
    } = request;

    const { status, message, data } = await fetchById({
      model: FoodModel,
      id,
    });

    response.status(status).json({ message, data });
  } catch (error) {
    response.status(500).json({ message: "Failed to fetch food" });
    console.log(error);
  }
};
