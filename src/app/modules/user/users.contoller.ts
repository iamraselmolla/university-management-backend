import { RequestHandler } from "express";
import httpStatus from "http-status";
import { z } from "zod";
import sendResponse from "../../../share/sendResponse";
import { UserService } from "./users.service";
const createUser: RequestHandler = async (req, res, next) => {
    try {
        const userZodSchema = z.object({
            body: z.object({
                role: z.string({
                    required_error: 'role is required in ZOD'
                }),
                password: z.string().optional(),
            })
        });
        await userZodSchema.parseAsync(req)
        const { user } = req.body
        const result = await UserService.createUser(user);
        sendResponse(res, { success: true, message: 'User created successfully', data: result, statusCode: httpStatus.OK })
    } catch (err) {
        next(err)
    }
}

export const UserController = { createUser };