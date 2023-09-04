import express from "express";
import validateRequest from "./middlewars/validateRequest";
import { userValidation } from "./user.validation";
import { UserController } from "./users.contoller";

const router = express.Router();

router.post('/create-user', validateRequest(userValidation.userZodSchema), UserController.createUser);

export default router