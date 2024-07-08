import httpStatus from "http-status";
import AppError from "../../../errors/AppError";
import { ServicesModel } from "./service.model";
import { TServices } from "./services.interface";

const createServicesIntoDB = async (payload: TServices) => {
  try {
    const result = await ServicesModel.create(payload);
    return result;
  } catch (err) {
    // throw new Error(`Error creating user: ${error.message}`);
    throw new AppError(httpStatus.BAD_REQUEST, "Failed to Created Services");
  }
};
//get all services
const getAllServices = async (payload: TServices) => {
  try {
    const result = await ServicesModel.find(payload);
    return result;
  } catch (err) {
    throw new AppError(httpStatus.BAD_REQUEST, "Failed to Get all Services");
  }
};
//get single service by id 
const getSingleServices = async (id:string) => {
const result = await ServicesModel.findById(id)
return result;
}
//update single service
const updateSingleServices = async(id:string, payload: Partial<TServices>)=>{
  // console.log(id,payload)
  const result = await ServicesModel.findByIdAndUpdate(id, payload, {new: true});
  return result;
}
export const AllServices = {
  createServicesIntoDB,
  getAllServices,
  getSingleServices,
  updateSingleServices
};
