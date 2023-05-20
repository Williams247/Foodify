import { Model } from "mongoose";
import { CategoryProps, FoodsProps } from "./product";
import { CartProps } from "./cart";
import { UserProps } from "./auth";

export type ModelProps = CategoryProps | FoodsProps | UserProps | CartProps;

export interface FetchProps {
  model: Model<ModelProps>;
  page: unknown;
  limit: unknown;
  searchParams?: {};
  populate?: string | string[];
}

export interface FetchByIdProps {
  model: Model<ModelProps>;
  id: unknown;
}

export interface SumProps {
  product: {
    price: number;
  };
}
