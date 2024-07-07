import { Request, Response } from "express";
import { AllServices } from "./services";

const createServices = async (req: Request, res: Response) => {
  try {
    const servicesData = req.body;
    console.log(servicesData);
    const result = await AllServices.createServicesIntoDB(servicesData);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Service created successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Something went wrong!",
      error: err,
    });
  }
};

export const servicesControllers = {
  services: createServices,
};
