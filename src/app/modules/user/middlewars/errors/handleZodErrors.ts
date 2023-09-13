import { ZodError, ZodIssue } from "zod";
import { IgenericErrorResponse } from "../../../interfaces/common";
import { IgenericErrorMessage } from "../../../interfaces/errorInterface";

const handleZodError = (error: ZodError): IgenericErrorResponse => {
    const errors: IgenericErrorMessage[] = error?.issues?.map((issue: ZodIssue) => {
        return {
            path: issue?.path[issue?.path.length - 1],
            message: issue?.message
        }
    })
    const statusCode = 400;
    return {
        statusCode,
        message: 'validation Failed',
        errorMessage: errors
    }
}
export default handleZodError;