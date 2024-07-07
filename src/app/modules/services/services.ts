import { ServicesModel } from "./service.model";
import { TServices } from "./services.interface";

const createServicesIntoDB = async (payload: TServices) => {
  try {
    const result = await ServicesModel.create(payload);
    return result;
  } catch (error) {
    throw new Error(`Error creating user: ${error.message}`);
  }
};
//get all services
const getAllServices = async (payload: TServices) => {
  try {
    const result = await ServicesModel.find(payload);
    return result;
  } catch (error) {
    throw new Error(`Error creating user: ${error.message}`);
  }
};
export const AllServices = {
  createServicesIntoDB,
  getAllServices,
};
