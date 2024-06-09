import express from "express";
import validateRequest from "../user/middlewars/validateRequest";
import { academicServiceController } from "./academicSemester.controller";
import { academicSemesterValidation } from "./academicSemester.validation";


// import { UserController } from "./users.contoller";

const router = express.Router();

router.post('/create-semester', validateRequest(academicSemesterValidation.academicSemesterZodSchema), academicServiceController.createSemester);


router.patch('/:id', validateRequest(academicSemesterValidation.updateAcademicSemesterZodSchema), academicServiceController.updateSemester);
router.get('/', academicServiceController.getAllSemesters)
router.get('/:id', academicServiceController.getSingleSemester);

export const semesterRoutes = router