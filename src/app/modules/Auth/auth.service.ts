import { signUpModel } from "../userSignUp/userSignUP.model";
import { TLoginUser } from "./auth.interface";
import bcrypt from "bcrypt";
const loginUser = async (payload: TLoginUser) => {
  // checking the user is existing
  const isUserExist = await signUpModel.findOne({
    email: payload.email,
    // password: payload.password,
  });

  //   console.log(isUserExist);
  if (!isUserExist) {
    throw new Error("User not found");
  }

  // checking the password
  const isPasswordMatch = await bcrypt.compare(
    payload.password,
    isUserExist.password
  );
  //   console.log(isPasswordMatch);
  if (!isPasswordMatch) {
    throw new Error("Invalid password");
  }
  return isUserExist;
};

export const authServices = {
  loginUser,
};
