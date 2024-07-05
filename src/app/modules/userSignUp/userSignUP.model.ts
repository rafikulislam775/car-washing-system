/* eslint-disable @typescript-eslint/no-this-alias */

import { Schema, model } from "mongoose";
import { TUserSignUp, UserModel } from "./userSignUP.interface";
import { Role } from "./userSignUp.constant";
import bcrypt from "bcrypt";
import config from "../../../config";

const userSinUpSchema = new Schema<TUserSignUp, UserModel>(
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

//try to create pre and post mongoes middleware
//npm i bcrypt
//npm i -D @types/bcrypt
userSinUpSchema.pre("save", async function (next) {
  // console.log(this,'that is the pre data')
  //hassing password and save into db
  // bcrypt.hash(your coming password, saltRounds, function (err, hash) {
  const user = this; // that is documented
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});
// // password e onn kiso show korab
// userSinUpSchema.post("save", function (doc, next) {
//   // ekane amra doc and next fuc k pai
//   // console.log(doc); //get is whole doc

//   next();
// });
//custom function

// Static method to check if user exists by email
userSinUpSchema.statics.isUserExistByEmail = async function (email: string) {
  return this.findOne({ email });
};

// Static method to check if password match
userSinUpSchema.statics.isPasswordMatch = async function (
  plainPassword,
  dbHashedPassword
) {
  return await bcrypt.compare(plainPassword, dbHashedPassword);
};
// crated a model
export const signUpModel = model<TUserSignUp, UserModel>(
  "UserSignUp",
  userSinUpSchema
);
