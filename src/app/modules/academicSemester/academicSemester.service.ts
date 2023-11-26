import httpStatus from "http-status";
import { IGenericResponse } from "../interfaces/common";
import IPaginationOptions from "../interfaces/paginationOptions";
import ApiError from "../user/middlewars/ApiErrorHandler";
import { academicSemesterTitleCodeMapper } from "./academicSemester.const";
import { IAcademicSemester } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemesterModel";

const createSemester = async (payload: IAcademicSemester): Promise<IAcademicSemester> => {
    if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Semester Code')
    }
    const result = await AcademicSemester.create(payload);
    return result;
}


const getAllSemesters = async (paginationOptions: IPaginationOptions): Promise<IGenericResponse<IAcademicSemester[]>> => {
    const { page = 1, limit = 10 } = paginationOptions;
    const skip = (page - 1) * limit;

    const result = await AcademicSemester.find().sort().skip(skip).limit(limit);
    const total = await AcademicSemester.countDocuments()
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result
    }
}

export const academicSemesterService = {
    createSemester,
    getAllSemesters
}