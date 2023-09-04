import { z } from 'zod';
const userZodSchema = z.object({
    body: z.object({
        role: z.string({
            required_error: 'role is required in ZOD'
        }),
        password: z.string().optional(),
    })
});
// await userZodSchema.parseAsync(req)


export const userValidation = {
    userZodSchema
}
