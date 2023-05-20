import { Request, Response } from "express";
import { CategoryModel } from "@models";
import { fetchById } from "@services";

// Fetch category by id
export const fetchCategoryById = async (
  request: Request,
  response: Response
) => {
  try {
    const {
      params: { id },
    } = request;

    const { status, message, data } = await fetchById({
      model: CategoryModel,
      id,
    });

    response.status(status).json({ message, data });
  } catch (error) {
    response.status(500).json({ message: "Failed fetch category." });
    console.log(error);
  }
};
