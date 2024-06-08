import mongoose from "mongoose";
import { IgenericErrorMessage } from "../../../interfaces/errorInterface";

const handleCastError = (error: mongoose.Error.CastError) => {
    const errors: IgenericErrorMessage[] = [
        {
            path: error.path,
            message: 'Invalid ID'
        }
    ]
    const statusCode = 400
    return {
        statusCode,
        message: 'Cast Error',
        errorMessage: errors
    }
}

export default handleCastError;