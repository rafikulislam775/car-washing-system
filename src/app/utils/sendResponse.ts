import { Response } from "express";

type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
  token?: string; // for JWT token generation, it might be added in the response data. This line is just for demonstration.
};
// ekhane T holo generic
// ki type asbe bola jai tai T use kora best
const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data?.statusCode).json({
    success: data?.success,
    statusCode: data?.statusCode,
    message: data?.message,
    token: data?.token,
    data: data?.data,
  });
};

export default sendResponse;
