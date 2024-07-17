/* eslint-disable no-unused-vars */
import { Model } from "mongoose";
import { UserRole } from "./userSignUp.constant";

// Define TRole as a union type of "admin" or "user"
export type TRole = "admin" | "user";

// Define TUserSignUp interface for user sign-up data
export interface TUserSignUp {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: TRole;
  address: string;
}
export type TUserRole = keyof typeof UserRole;
// Define UserModel extending Mongoose Model with custom static methods
export interface UserModel extends Model<TUserSignUp> {
  // custom static methods for use any ware
  isUserExistByEmail(email: string): Promise<TUserSignUp>;
  isPasswordMatch(
    plainPassword: string, // give the user a password
    dbHashedPassword: string //coming from the database
  ): Promise<boolean>;
}
