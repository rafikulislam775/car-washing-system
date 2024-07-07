import { ZodError, ZodIssue } from "zod";
import {
  TErrorSources,
  TGenericErrorRequest,
} from "../interface/error.interface";

const handleZodError = (err: ZodError): TGenericErrorRequest => {
  const errorSources: TErrorSources = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue.path[issue.path.length - 1],
      message: issue.message,
    };
  });
  const statusCode = 400;
  return {
    statusCode,
    message: " validation error",
    errorSources,
  };
};

export default handleZodError;
