import { Request, Response } from "express";
import { CategoryModel } from "@models";
import { fetchAll } from "@services";

// Fetch category
export const fetchAllCategories = async (
  request: Request,
  response: Response
) => {
  try {
    const {
      query: { page, limit },
    } = request;

    const { status, message, data } = await fetchAll({
      model: CategoryModel,
      page: page,
      limit: limit,
    });

    response.status(status).json({ message, data });
  } catch (error) {
    response.status(500).json({ message: "Failed fetch categories." });
    console.log(error);
  }
};
