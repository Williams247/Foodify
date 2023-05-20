import { Request, Response } from "express";
import { CategoryModel } from "@models";

export const deleteCategory = async (request: Request, response: Response) => {
  try {
    const {
      params: { id },
    } = request;
    
    await CategoryModel.findByIdAndDelete(id);
    response.status(200).json({ message: "Category deleted" });
  } catch (error) {
    response.status(500).json({ message: "Failed to delete category" });
    console.log(error);
  }
};
