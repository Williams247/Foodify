import { SchemaDefinitionProperty } from "mongoose";

export interface CartProps {
  product?: SchemaDefinitionProperty | unknown;
  userId?: SchemaDefinitionProperty | unknown;
  description?: string
}
