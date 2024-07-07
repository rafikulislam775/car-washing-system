import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import { TErrorSources } from "../../interface/error.interface";
import handleZodError from "../../errors/handleZodError";
import handleValidationError from "../../errors/handleValidationError";
import handelCastError from "../../errors/handelCastError";
import handleDuplicateError from "../../errors/handelDuplicateError";
import AppError from "../../errors/AppError";
import config from "../../config";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  //setting default values
  let statusCode = err.statusCode || 500;
  let message = err.message || "Something went wrong";

  let errorSources: TErrorSources = [
    {
      path: "",
      message: "Something went wrong",
    },
  ];

  // check it zod error or not
  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  } else if (err?.name === "ValidationError") {
    const simplifiedError = handleValidationError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  } else if (err?.name === "CastError") {
    const simplifiedError = handelCastError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  } else if (err?.name === 11000) {
    const simplifiedError = handleDuplicateError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  } else if (err instanceof AppError) {
    statusCode = err?.statusCode;
    message = err?.message;
    errorSources = [
      {
        path: "",
        message: err.message,
      },
    ];
  } else if (err instanceof Error) {
    message = err?.message;
    errorSources = [
      {
        path: "",
        message: err.message,
      },
    ];
  }
  //ultimate return
  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    err,
    // stack: err.stack,
    stack: config.node_env === "development" ? err.stack : null,
  });
};

export default globalErrorHandler;
/**
 * success
 * message
 * errorSources:[{
 * path:'',
 * message: 'Something went wrong'}],
 * stack
 * production er time e stack remove korte hobe
 */
