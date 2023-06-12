import { Request, Response } from "express";
import { FoodModel } from "@models";
import { RateProps } from "@utils";

export const updateFood = async (request: Request, response: Response) => {
  try {
    const {
      params: { id },
      body: { name, price, image, description },
    } = request;

    const food = await FoodModel.findByIdAndUpdate(id);
    if (food) {
      food.name = name ?? food.name;
      food.image = image ?? food.image;
      food.description = description ?? food.description;
      food.price = price ?? food.price;
      await food.save();
      response.status(200).json({ message: "Food updated" });
    }
  } catch (error) {
    response.status(500).json({ message: "Failed to update food" });
    console.log(error);
  }
};

export const rateFood = async (request: Request, response: Response) => {
  try {
    const {
      params: { id },
      body: { rate },
    } = request;
    const food = await FoodModel.findByIdAndUpdate(id);

    const userID = request.user.id as string;

    if (food && food.ratings) {
      if (food.ratings.filter(({ userId }) => String(userId) === String(userID)).length > 0) {
        response.status(409).json({ message: "Rate already addded" });
        return;
      }

      food.ratings.push({ userId: userID, rate });
      await food.save();
      response.status(201).json({ message: "Rate added" });
    }
  } catch (error) {
    response.status(500).json({ message: "Failed to rate food" });
    console.log(error);
  }
};
