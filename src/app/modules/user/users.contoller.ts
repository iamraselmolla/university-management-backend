import { RequestHandler } from "express";
import { z } from "zod";
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
        res.status(200).json({
            success: true,
            message: "User created successfully",
            data: result
        })
    } catch (err) {
        next(err)
    }
}
export const UserController = { createUser };