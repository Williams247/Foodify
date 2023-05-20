import { Request, Response } from "express";
import { FoodModel, CategoryModel } from "@models";
import { FoodsProps } from "@utils";

// Creates a particular food based on a category
export const createFood = async (request: Request, response: Response) => {
  const {
    body: { name, image, description, price },
    params: { id },
    query: { quantity },
  } = request;

  try {
    const selectedCategory = await CategoryModel.findOne({ _id: id });
    if (!selectedCategory) {
      response.status(404).json({ message: "Invalid category" });
      return;
    }

    const productQuantity = Number(quantity ?? 0);

    if (productQuantity > 1) {
      let allProducts: FoodsProps[] = [];

      for (let product = 0; product < productQuantity; product++) {
        allProducts.push({
          name,
          categoryId: id,
          image,
          description,
          price,
        });
      }

      await FoodModel.insertMany([...allProducts]);
      response.status(201).json({ message: "Foods created" });
      return;
    }

    const createFood = new FoodModel<FoodsProps>({
      name,
      categoryId: id,
      image,
      description,
      price,
    });

    await createFood.save();
    response.status(201).json({ message: "Food created" });
  } catch (error) {
    response.status(500).json({ message: "Failed to create food." });
    console.log(error);
  }
};
