// import { TUserSignUp } from "./userSignUP.interface";
// import { signUpModel } from "./userSignUP.model";

// const createUserIntoDB = async (payload: TUserSignUp) => {
//   console.log(`eta service payload${payload}`);
//   const result = await signUpModel.create(payload);
//   return result;
// };

// export const SignUpServices = {
//   createUserIntoDB,
// };

import { TUserSignUp } from "./userSignUP.interface";
import { signUpModel } from "./userSignUP.model";

const createUserIntoDB = async (payload: TUserSignUp) => {
  try {
    // console.log(`Service payload: ${JSON.stringify(payload)}`);
    const result = await signUpModel.create(payload);
    return result;
  } catch (error) {
    throw new Error(`Error creating user: ${error.message}`);
  }
};

export const SignUpServices = {
  createUserIntoDB,
};
