import express from "express";
import { UserController } from "./users.contoller";

const router = express.Router();

router.post('/create-user', UserController.createUser);

export default router