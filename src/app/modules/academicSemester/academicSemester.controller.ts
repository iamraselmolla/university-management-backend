import { NextFunction, Request, RequestHandler, Response } from "express";
import httpStatus from "http-status";
import paginationField from "../../../constans/paginations";
import catchAsyncFunction from "../../../share/catchAsync";
import pick from "../../../share/pick";
import sendResponse from "../../../share/sendResponse";
import { filterableFileds } from "./academicSemester.const";
import { IAcademicSemester } from "./academicSemester.interface";
import { academicSemesterService } from "./academicSemester.service";



const createSemester: RequestHandler = catchAsyncFunction(async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;

    const result = await academicSemesterService.createSemester(academicSemesterData);
    sendResponse(res,
        {
            success: true,
            message: 'Academic semester created',
            data: result,
            statusCode: httpStatus.OK,

        }
    )


});


const getAllSemesters: RequestHandler = catchAsyncFunction(async (req: Request, res: Response, next: NextFunction) => {

    const paginationOptions = pick(req.query, paginationField)

    const filters = pick(req.query, filterableFileds)
    const result = await academicSemesterService.getAllSemesters(filters, paginationOptions);
    sendResponse<IAcademicSemester[]>(res,
        {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Semester retrieved successfully',
            meta: result.meta,
            data: result.data,
        });
})

const getSingleSemester = catchAsyncFunction(async (req: Request, res: Response, next: NextFunction) => {

    const id = req.params.id;
    const result = await academicSemesterService.getSingleSemester(id);
    sendResponse<IAcademicSemester>(res,
        {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Semester retrieved successfully',
            data: result

        });
})

const updateSemester = catchAsyncFunction(async (req: Request, res: Response, next: NextFunction) => {

    const id = req.params.id;
    const updatedData = req.body
    const result = await academicSemesterService.updateSemester(id, updatedData);
    sendResponse<IAcademicSemester>(res,
        {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Semester Updated successfully',
            data: result

        });
})



const deleteSemester = catchAsyncFunction(async (req: Request, res: Response, next: NextFunction) => {

    const id = req.params.id;
    const result = await academicSemesterService.deleteSemester(id);
    sendResponse<IAcademicSemester>(res,
        {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Semester Deleted successfully',
            data: result

        });
})
export const academicServiceController = {
    createSemester,
    getAllSemesters,
    getSingleSemester,
    updateSemester,
    deleteSemester
}