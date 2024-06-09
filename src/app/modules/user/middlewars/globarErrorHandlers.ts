import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import config from "../../../../config";
import { IgenericErrorMessage } from "../../interfaces/errorInterface";
import { handleValidationError } from "../../interfaces/handleErrors";
import ApiError from "./ApiErrorHandler";
import handleCastError from "./errors/handleCastError";
import handleZodError from "./errors/handleZodErrors";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    let statusCode = 501;
    let message = 'Something went wrong!'

    let errorMessage: IgenericErrorMessage[] = []

    if (err?.name === 'ValidationError') {
        const simplefiedError = handleValidationError(err)
        statusCode = simplefiedError.statusCode
        message = simplefiedError.message
        errorMessage = simplefiedError.errorMessage

    } else if (err instanceof ZodError) {
        const simplefiedError = handleZodError(err)
        statusCode = simplefiedError.statusCode;
        message = simplefiedError.message;
        errorMessage = simplefiedError.errorMessage
    }


    else if (err instanceof ApiError) {
        console.log("ekhane error hoyeche")
        statusCode = err?.statusCode
        message = err?.message
        errorMessage = err?.message ? [
            {
                path: '',
                message: err?.message
            }
        ] : [

        ]
    } else if (err.name === 'CastError') {
        const simplefiedError = handleCastError(err)
        statusCode = simplefiedError?.statusCode
        message = simplefiedError?.message
        errorMessage = simplefiedError?.message ? [
            {
                path: '',
                message: simplefiedError?.message
            }
        ] : []
    }


    else if (err instanceof Error) {
        message = err?.message
        errorMessage = err?.message ?
            [
                {
                    path: '',
                    message: err?.message
                }
            ] : [

            ]

    }

    res.status(statusCode).json({
        success: false,
        message,
        errorMessage,
        stack: config.env !== 'production' ? err?.stack : undefined

    })
}
export default globalErrorHandler;

