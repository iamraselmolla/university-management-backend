import config from "../../../config";
import ApiError from "./middlewars/ApiErrorHandler";
import { IUser } from "./users.interface";
import { User } from "./users.model";
import generateUserId from "./users.utlis";
// import { generateUserId } from "./users.utlis";




const createUser = async (user: IUser): Promise<IUser | null> => {
  const id = await generateUserId();
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