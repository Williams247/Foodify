import { Request, Response } from "express";
import { CategoryModel } from "@models";
import { slugFormat } from "@utils";

// Update category by id
export const updateCategoryById = async (
  request: Request,
  response: Response
) => {
  try {
    const {
      params: { id },
      body: { name, description, image },
    } = request;

    const category = await CategoryModel.findByIdAndUpdate(id);
    if (category) {
      category.name = name ?? category.name;
      category.slug = slugFormat(name ?? category.name);
      category.description = description ?? category.description;
      category.image = image ?? category.image;
      await category.save();
      response.status(200).json({ message: "Category updated" });
      return;
    }

    response.status(404).json({ message: "Category not found." });
  } catch (error) {
    response.status(500).json({ message: "Failed to update category" });
    console.log(error);
  }
};
