import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { authServices } from "./auth.service";

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { userWithoutPassword, accessToken } = await authServices.loginUser(
    req.body
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User logged in successfully",
    token: accessToken,
    data: userWithoutPassword,
  });
});
export const AuthController = {
  loginUser,
};
