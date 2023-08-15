import express from "express";
import userContoller from "./users.contoller";

const router = express.Router();

router.post('/create-user', userContoller.createUser);

export default router