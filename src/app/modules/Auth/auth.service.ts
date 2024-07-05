import { signUpModel } from "../userSignUp/userSignUP.model";
import { TLoginUser } from "./auth.interface";
// import bcrypt from "bcrypt";
const loginUser = async (payload: TLoginUser) => {
  //! checking the user is existing
  //   const isUserExist = await signUpModel.findOne({
  //     email: payload.email,
  // password: payload.password,
  //   });

  //   console.log(isUserExist);
  //   if (!isUserExist) {
  //     throw new Error("User not found");
  //   }

  // checking the password
  //   const isPasswordMatch = await bcrypt.compare(
  //     payload.password,
  //     isUserExist.password
  //   );
    //   console.log(isPasswordMatch);
  //   if (!isPasswordMatch) {
  //     throw new Error("Invalid password");
  //   }
  // return isUserExist;
  const userData = await signUpModel.isUserExistByEmail(payload.email);
  if (!userData) {
    throw new Error("User not found");
  }
  // console.log(userData)
  // check the password and return the user data
  const isPasswordMatch = await signUpModel.isPasswordMatch(payload?.password, userData?.password)
  if (!isPasswordMatch) {
    throw new Error("Invalid password");
  }
  // console.log(isPasswordMatch)
  // return userData;
 // Create a copy of the userData object and delete the password field
 const userWithoutPassword = { ...userData.toObject() };
 delete userWithoutPassword.password;

 return userWithoutPassword;
};

export const authServices = {
  loginUser,
};
