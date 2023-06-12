import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { CategoryProps, FoodsProps, RateProps } from "@utils";

export const validateCreateUpdateCategory = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const schema = Joi.object<CategoryProps>({
    name: Joi.string().required().label("Category name field"),
    description: Joi.string().optional(),
    image: Joi.string().optional(),
  });

  const { error } = schema.validate(request.body);

  if (error) {
    response.status(422).json({ message: error.message });
    return;
  }

  next();
};

export const validateFood = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const schema = Joi.object<FoodsProps>({
    name: Joi.string().required().label("Food name field"),
    image: Joi.string().required().label("Image field"),
    price: Joi.number().required().label("Number field"),
    description: Joi.string().optional(),
  });

  const { error } = schema.validate(request.body);

  if (error) {
    response.status(422).json({ message: error.message });
    return;
  }

  next();
};

export const validateFoodRating = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const schema = Joi.object<RateProps>({
    rate: Joi.number().required().min(1).max(5),
  });

  const { error } = schema.validate(request.body);

  if (error) {
    response.status(422).json({ message: error.message });
    return;
  }

  next();
};
