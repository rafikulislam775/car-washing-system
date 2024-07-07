import { ServicesModel } from "./service.model";
import { TServices } from "./services.interface";

const createServicesIntoDB = async (payload: TServices) => {
  try {
    console.log(payload);
    const result = await ServicesModel.create(payload);
    // Convert the result to an object and remove the password field

    return result;
  } catch (error) {
    throw new Error(`Error creating user: ${error.message}`);
  }
};

export const AllServices = {
  createServicesIntoDB,
};
