import config from "../../../config";
import ApiError from "./middlewars/ApiErrorHandler";
import { IUser } from "./users.interface";
import { User } from "./users.model";
import { generateStudentId } from "./users.utlis";




const createUser = async (user: IUser): Promise<IUser | null> => {
  const academicSemster = {
    code: "01",
    year: "2025",
    
  }
  const id = await generateStudentId(academicSemster);
  user.id = id;
  if (!user.password) {
    user.password = config.student_pass as string
  }
  const createdUser = await User.create(user);
  if (!createUser) {
    throw new ApiError(400, "Failed to create User!")
  }
  return createdUser
}

export const UserService = {
  createUser
} 