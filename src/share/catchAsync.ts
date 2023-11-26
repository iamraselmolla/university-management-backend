import { NextFunction, Request, RequestHandler, Response } from "express";

const catchAsyncFunction = (fn: RequestHandler) => async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    try {
        await fn(req, res, next)
    }
    catch (err) {
        next(err)
    }
}


export default catchAsyncFunction;