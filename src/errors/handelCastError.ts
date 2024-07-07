import mongoose from "mongoose";
import {
  TErrorSources,
  TGenericErrorRequest,
} from "../interface/error.interface";

const handelCastError = (
  err: mongoose.Error.CastError
): TGenericErrorRequest => {
  const errorSources: TErrorSources = [
    {
      path: err.path,
      message: err.message,
    },
  ];

  const statusCode = 400;
  return {
    statusCode,
    message: "Cast Error",
    errorSources,
  };
};

export default handelCastError;
