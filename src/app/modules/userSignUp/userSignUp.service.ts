import { TUserSignUp } from "./userSignUP.interface";
import { signUpModel } from "./userSignUP.model";

const createUserIntoDB = async (payload: TUserSignUp) => {
  try {
    const result = await signUpModel.create(payload);
    // Convert the result to an object and remove the password field
    const userObject: any = result.toObject();
    delete userObject.password;
    return userObject;
  } catch (error) {
    throw new Error(`Error creating user: ${error.message}`);
  }
};

export const SignUpServices = {
  createUserIntoDB,
};
