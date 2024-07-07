import mongoose from "mongoose";
import {
  TErrorSources,
  TGenericErrorRequest,
} from "../interface/error.interface";

const handleValidationError = (
  err: mongoose.Error.ValidationError
): TGenericErrorRequest => {
  // eta jeheto only object tai object.values er dara value  golo k niye map saliy
  const errorSources: TErrorSources = Object.values(err.errors).map(
    (val: mongoose.Error.ValidationError | any) => {
      return {
        path: val?.path,
        message: val?.message,
      };
    }
  );

  const statusCode = 400;
  return {
    statusCode,
    message: "validation error",
    errorSources,
  };
};

export default handleValidationError;
