import status from 'http-status';
import { Schema, model } from 'mongoose';
import ApiError from '../user/middlewars/ApiErrorHandler';
import { academicSemesterCodes, academicSemesterMonths, academicSemesterTitles } from './academicSemester.const';
import { AcademicSemesterModel, IAcademicSemester } from './academicSemester.interface';

const academicSemesterSchema = new Schema<IAcademicSemester>(
    {
        title: {
            type: String,
            required: true,
            enum: academicSemesterTitles
        },
        year: {
            type: String,
            required: true,
        },
        code: {
            type: String,
            required: true,
            enum: academicSemesterCodes
        },
        startMonth: {
            type: String,
            required: true,
            enum: academicSemesterMonths
        },
        endMonth: {
            type: String,
            required: true,
            enum: academicSemesterMonths
        },
    },
    {
        timestamps: true,
    }
)


academicSemesterSchema.pre('save', async function (next) {
    const isExist = await AcademicSemester.findOne({ title: this.title, year: this.year });
    if (isExist) {
        throw new ApiError(status.CONFLICT, "This semester already created")
    } else {
        next()
    }
})
export const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>('AcademicSemester', academicSemesterSchema);