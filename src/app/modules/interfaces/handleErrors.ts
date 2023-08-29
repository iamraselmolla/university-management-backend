import mongoose from "mongoose";
import { IgenericErrorResponse } from "./common";
import { IgenericErrorMessage } from "./errorInterface";


export const handleValidationError = (err: mongoose.Error.ValidationError): IgenericErrorResponse => {
  let errors: IgenericErrorMessage[] = Object.values(err.errors).map((el) => {
    return {
      path: el?.path,
      message: el?.message,
    };
  });
  let statusCode = 400;
  return {
    statusCode,
    message: 'Validation Error',
    errorMessage: errors

  }
};

export default handleValidationError;