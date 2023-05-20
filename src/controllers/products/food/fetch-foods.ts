import { Request, Response } from "express";
import { FoodModel } from "@models";
import { fetchAll } from "@services";

export const fetchFoods = async (request: Request, response: Response) => {
  try {
    const {
      params: { id },
      query: { page, limit },
    } = request;

    const { status, message, data } = await fetchAll({
      model: FoodModel,
      page,
      limit,
      searchParams: { categoryId: id },
    });

    response.status(status).json({ message, data });
  } catch (error) {
    response.status(500).json({ message: "Failed to get foods" });
    console.log(error);
  }
};
