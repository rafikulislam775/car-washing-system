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
  // const result = await ServicesModel.find(payload);
  const result = await ServicesModel.find({ ...payload, isDeleted: false });
  return result;
};
//get single service by id
const getSingleServices = async (id: string) => {
  const findDeletedServices = await ServicesModel.findOne({
    _id: id,
    isDeleted: true,
  });
  if (findDeletedServices) {
    throw new AppError(httpStatus.NOT_FOUND, "Service not found");
  }
  const result = await ServicesModel.findById(id);
  return result;
};
//update single service
//Partial<TServices> হল TypeScript এর একটি ইউটিলিটি টাইপ যা একটি টাইপের সব প্রোপার্টিকে অপশনাল করে দেয়।
// অর্থাৎ, TServices টাইপে যে প্রোপার্টিগুলো ছিল, Partial<TServices> ব্যবহার করলে সেই প্রোপার্টিগুলো সবগুলোই অপশনাল হয়ে যায়।
//you can update, one or more. when using <Partial>
const updateSingleServices = async (
  id: string,
  payload: Partial<TServices>
) => {
  // console.log(id,payload)
  //A.findByIdAndUpdate(id, updated data , options)
  const result = await ServicesModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};
// soft delete service by id
const deleteSingleServices = async (id: string) => {
  const result = await ServicesModel.findOneAndUpdate(
    { _id: id },
    { isDeleted: true },
    { new: true }
  );
  return result;
};
export const AllServices = {
  createServicesIntoDB,
  getAllServices,
  getSingleServices,
  updateSingleServices,
  deleteSingleServices,
};
