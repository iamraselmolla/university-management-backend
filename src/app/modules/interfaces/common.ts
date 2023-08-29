import { IgenericErrorMessage } from "./errorInterface"

export type IgenericErrorResponse = {
    statusCode: number
    message: string
    errorMessage: IgenericErrorMessage[]
}