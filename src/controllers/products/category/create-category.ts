import { Request, Response } from "express";
import { CategoryModel } from "@models";
import { slugFormat } from "@utils";

// Create category
export const createCategory = async (request: Request, response: Response) => {
  try {
    const {
      body: { name, description },
    } = request;

    const slugName = slugFormat(name);

    const isCategoryCreated = await CategoryModel.findOne({ slug: slugName });

    if (isCategoryCreated) {
      response.status(409).json({ message: "Category already exist" });
      return;
    }

    const category = new CategoryModel({
      name,
      slug: slugName,
      description,
    });

    await category.save();
    response.status(201).json({ message: "Category created" });
  } catch (error) {
    response.status(500).json({ message: "Failed to create category" });
    console.log(error);
  }
};
