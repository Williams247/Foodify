import { Request, Response } from "express";
import { CartModel } from "@models";
import { fetchAllWithoutPaginate } from "@services";
import { sumTotal } from "@utils";
import { AnyExpression } from "mongoose";

export const fetchCarts = async (request: Request, response: Response) => {
  try {
    const {
      query: { page, limit },
    } = request;

    const { status, message, data } = await fetchAllWithoutPaginate({
      model: CartModel,
      page,
      limit,
      searchParams: { userId: request.user.id },
      populate: "product",
    });

    response.status(status).json({
      message,
      data: {
        ...data,
        totalCartItems: sumTotal(data?.results as AnyExpression),
      },
    });
    
  } catch (error) {
    response.status(500).json({ message: "Failed to fetch carts" });
  }
};
