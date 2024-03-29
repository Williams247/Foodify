import { Request, Response } from "express";
import { CategoryModel } from "@models";
import { slugFormat } from "@utils";

// Create category
export const createCategory = async (request: Request, response: Response) => {
  try {
    const {
      body: { name, description, image },
    } = request;

    const slugName = slugFormat(name);

    const isCategoryCreated = await CategoryModel.findOne({ slug: slugName });

    if (isCategoryCreated) {
      response
        .status(409)
        .json({
          success: false,
          status: 409,
          message: "Category already exist",
        });
      return;
    }

    const category = new CategoryModel({
      name,
      slug: slugName,
      description,
      image: image ?? ''
    });

    await category.save();
    response.status(201).json({ succcess: true, status: 200, message: "Category created" });
  } catch (error) {
    response.status(500).json({ message: "Failed to create category" });
    console.log(error);
  }
};
