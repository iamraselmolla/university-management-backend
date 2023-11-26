import { Response } from "express";


type IapiResponse<T> = {
    statusCode: number;
    success: boolean;
    message?: string | null;
    data: T;
    meta: {
        page: number;
        limit: number;
        total: number;
    }
}
const sendResponse = <T>(res: Response, data: IapiResponse<T>): void => {

    const responseData: IapiResponse<T> = {
        statusCode: data.statusCode,
        success: data.success,
        data: data.data,
        message: data.message || null,
        meta: data?.meta || null
    }
    res.status(data.statusCode).json(responseData)
}


export default sendResponse;
