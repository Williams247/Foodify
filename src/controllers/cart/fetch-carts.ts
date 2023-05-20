import { Request, Response } from "express";
import { CartModel } from "@models";
import { fetchAll } from "@services";

export const fetchCarts = async (request: Request, response: Response) => {
  try {
    const {
      query: { page, limit },
    } = request;

    console.log(request.user.id)

    const { status, message, data } = await fetchAll({
      model: CartModel,
      page,
      limit,
      searchParams: { userId: request.user.id },
      populate: "product"
    })

    response.status(status).json({ message, data });
  } catch (error) {
    response.status(500).json({ message: "Failed to fetch carts" });
  }
};
