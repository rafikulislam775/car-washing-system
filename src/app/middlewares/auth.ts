import { NextFunction, Request, Response } from "express";

import catchAsync from "../utils/catchAsync";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../../config";
import { TUserRole } from "../modules/userSignUp/userSignUP.interface";
//rest operations
// Rest এবং Spread এর মধ্যে পার্থক্য
// Rest প্যারামিটার হিসেবে ব্যবহৃত হয় এবং সব আর্গুমেন্টকে একসাথে অ্যারে হিসেবে গ্রহণ করে।
//auth('user','admin')// output is ['user', 'admin]
// function firstAndRest(first, ...rest) {
//   console.log('First:', first);
//   console.log('Rest:', rest);
// } firstAndRest(10, 20, 30, 40, 50); output First: 10 ,Rest: [20, 30, 40, 50]

// Spread অ্যারের উপাদানগুলোকে আলাদা আলাদা উপাদানে ভাঙে অথবা অবজেক্ট কপি করার সময় ব্যবহৃত হয়।
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5];console.log(arr2); // আউটপুট হবে [1, 2, 3, 4, 5]
const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // console.log(req.headers.authorization);
    const token = req.headers.authorization;
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, "you are not authorized");
    }
    // invalid token
    jwt.verify(
      token,
      config.jwt_access_secret as string,
      function (err, decoded) {
        // err
        if (err) {
          throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized");
        }
        const role = (decoded as JwtPayload).role;
        if (requiredRoles && !requiredRoles.includes(role)) {
          throw new AppError(
            httpStatus.FORBIDDEN,
            "you are not authorized for this resource"
          );
        }
        // decoded undefined
        // console.log(decoded);
        // const { userId, role } = decoded;
        req.user = decoded as JwtPayload;
        next();
      }
    );
  });
};

export default auth;
