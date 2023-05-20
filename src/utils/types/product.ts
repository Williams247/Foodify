import { SchemaDefinitionProperty } from "mongoose";

export interface CategoryProps {
  name?: string;
  slug?: string;
  description?: string;
  image?: string
}

export interface FoodsProps {
  name?: string;
  categoryId?: SchemaDefinitionProperty;
  image?: string;
  description?: string;
  price?: number;
}
