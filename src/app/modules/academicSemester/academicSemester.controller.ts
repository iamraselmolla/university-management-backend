import { RequestHandler } from "express";
import { academicSemesterService } from "./academicSemester.service";



const createSemester: RequestHandler = async (req, res, next) => {
    try {
        const { ...academicSemesterData } = req.body;

        const result = await academicSemesterService.createSemester(academicSemesterData);

        res.status(200).json({
            success: true,
            message: 'Academic Semester is created successfully',
            data: result
        })

    } catch (err) {
        next(err)
    }
}

export const academicServiceController = {
    createSemester
}