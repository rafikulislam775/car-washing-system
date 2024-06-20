import { TUser } from "./user.interface";
import { userModel } from "./user.model";

const createUserLoginIntoDB = async (payload: TUser) => {
  const result = await userModel.create(payload);
  return result;
};

export const userServices = {
  createUserLoginIntoDB,
};
