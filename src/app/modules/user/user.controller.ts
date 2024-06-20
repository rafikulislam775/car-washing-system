import { Request, Response } from "express";
import { userServices } from "./user.service";

const userLogin = async (req: Request, res: Response) => {
  try {
    const userLogData = req.body;
    const result = await userServices.createUserLoginIntoDB(userLogData);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User logged in successfully",
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

export const UserLoginController = {
  userLogin,
};
