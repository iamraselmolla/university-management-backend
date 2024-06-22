import { Types } from "mongoose"

export type IUser = {
  id: string
  role: string
  password: string,
  student?: Types.ObjectId | Istudent,
  faculty?: Types.ObjectId | IFaculty,
  admin?: Types.ObjectId | IAdmin,
}