import { Schema, model } from "mongoose";
import { TUserSignUp } from "./userSignUP.interface";
import { Role } from "./userSignUp.constant";

const userSinUpSchema = new Schema<TUserSignUp>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: {
        //   values: ["admin", "user"],
        values: Role,
        message: "{VALUE} is not a valid role",
      },
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
// crated a model
export const signUpModel = model<TUserSignUp>("UserSignUp", userSinUpSchema);
