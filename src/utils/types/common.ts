import { Model } from "mongoose";
import { CategoryProps, FoodsProps } from "@utils";

export type AllModelProps = FoodsProps | CategoryProps;

export interface FetchProps {
  model: Model<AllModelProps>;
  page: unknown;
  limit: unknown;
}

export interface FetchByIdProps {
  model: Model<AllModelProps>;
  id: unknown;
}
