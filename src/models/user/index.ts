import mongoose from "mongoose";
import { UserProps } from "@utils";

const Schema = mongoose.Schema;

const user = new Schema<UserProps>({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  blocked: Boolean,
  image: String,
  verified: {
    type: Boolean,
    require: true
  }
});

export const UserModel = mongoose.model("user", user);
