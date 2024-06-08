import httpStatus from "http-status";
import { SortOrder } from "mongoose";
import { paginationHelper } from "../../../helpers/paginations";
import { IGenericResponse } from "../interfaces/common";
import IPaginationOptions from "../interfaces/paginationOptions";
import ApiError from "../user/middlewars/ApiErrorHandler";
import { academicSemesterFields, academicSemesterTitleCodeMapper } from "./academicSemester.const";
import { IAcademicSemester } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";

const createSemester = async (payload: IAcademicSemester): Promise<IAcademicSemester> => {
    if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Semester Code')
    }
    const result = await AcademicSemester.create(payload);
    return result;
}


const getAllSemesters = async (filters: { searchTerm: string },
    paginationOptions: IPaginationOptions): Promise<IGenericResponse<IAcademicSemester[]>> => {

    const { searchTerm, ...filtersData } = filters;

    const andCondition = []
    if (searchTerm) {
        andCondition.push({
            $or: academicSemesterFields.map((field) => ({
                [field]: {
                    $regex: searchTerm,
                    $options: 'i'
                }
            }))
        });
    }
    if (Object.keys(filtersData).length) {
        andCondition.push({
            $and: Object.entries(filtersData).map(([field, value]) => ({
                [field]: value
            }))
        })
    }
    const { page, limit, skip, sortBy, sortOrder } = paginationHelper.calculatepagination(paginationOptions);

    const sortCondition: { [key: string]: SortOrder } = {}

    if (sortBy && sortOrder) {
        sortCondition[sortBy] = sortOrder
    }
    const result = await AcademicSemester.find({
        $and: andCondition
    }).sort(sortCondition).skip(skip).limit(limit);
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