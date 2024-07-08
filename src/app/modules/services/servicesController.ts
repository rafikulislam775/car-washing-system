import { Request, Response } from "express";
import { AllServices } from "./services";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

// const createServices = async (req: Request, res: Response) => {
//   try {
//     const servicesData = req.body;

//     const result = await AllServices.createServicesIntoDB(servicesData);
//     res.status(200).json({
//       success: true,
//       statusCode: 200,
//       message: "Service created successfully",
//       data: result,
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       statusCode: 500,
//       message: "Something went wrong!",
//       error: err,
//     });
//   }
// };

// create service
const createServices = catchAsync(async (req, res) => {
  const servicesData = req.body;
  const result = await AllServices.createServicesIntoDB(servicesData);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Service created successfully",
    data: result,
  });
});
// get all services
const findAllServices = catchAsync(async (req, res) => {
  const result = await AllServices.getAllServices(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Services fetched successfully",
    data: result,
  });
});
//get single service by id 
const findSingleServices = catchAsync(async(req, res) => {
  const {id} = req.params;
  console.log(id);
  const result = await AllServices.getSingleServices(id);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Service fetched successfully",
    data: result,
  })
})
export const servicesControllers = {
  createServices,
  findAllServices,
  findSingleServices
};
