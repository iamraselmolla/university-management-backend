import { Response } from "express";


type IapiResponse<T> = {
    statusCode: number;
    success: boolean;
    message?: string | null;
    data?: T;
    meta?: {
        page: number;
        limit: number;
        total: number;
    }
}
function sendResponse<T>(res: Response, data: {
    statusCode: number;
    success: boolean;
    message: string;
    meta?: {
        page?: number;
        limit?: number;
        total?: number;
    };
    data: T;
}): void {
    res.status(data.statusCode).json({
        success: data.success,
        message: data.message,
        meta: data.meta || null || undefined,
        data: data.data || null || undefined,
    });
}


export default sendResponse;
