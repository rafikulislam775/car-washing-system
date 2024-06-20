import { Request, Response } from "express";
import { SignUpServices } from "./userSignUp.service";

const signUpUser = async (req: Request, res: Response) => {
  try {
    const userSignUpData = req.body;
    // console.log(userSignUpData);
    const result = await SignUpServices.createUserIntoDB(userSignUpData);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User registered successfully",
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

export const signUpControllers = {
  signUpUser,
};
