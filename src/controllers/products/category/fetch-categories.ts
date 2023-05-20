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

    const allCategories = await fetchAll({
      model: CategoryModel,
      page: page ?? 1,
      limit: limit ?? 5,
    });

    response.status(200).json({ message: "Success", data: allCategories });
  } catch (error) {
    response.status(500).json({ message: "Failed fetch categories." });
    console.log(error);
  }
};
