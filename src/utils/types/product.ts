import { SchemaDefinitionProperty } from "mongoose";

export interface CategoryProps {
  name?: string;
  slug?: string;
  description?: string;
}

export interface FoodsProps {
  name?: string;
  categoryId?: SchemaDefinitionProperty;
  image?: string;
  description?: string;
  slug?: string;
  price?: number;
}
