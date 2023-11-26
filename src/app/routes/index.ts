import express from "express";
import { semesterRoutes } from "../modules/academicSemester/academicSemester.route";
import { userRouter } from "../modules/user/users.route";

const router = express.Router();

const routerArr = [
    {
        path: '/users',
        router: userRouter
    },
    {
        path: '/academic-semester/',
        router: semesterRoutes
    },
]

routerArr.forEach(route => router.use(route.path, route.router));




export default router;