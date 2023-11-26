import { IgenericErrorMessage } from "./errorInterface"

export type IgenericErrorResponse = {
    statusCode: number
    message: string
    errorMessage: IgenericErrorMessage[]
}
export type IGenericResponse<T> = {
    meta: {
        page?: number;
        limit?: number;
        total?: number;
    }
    data: T;
}