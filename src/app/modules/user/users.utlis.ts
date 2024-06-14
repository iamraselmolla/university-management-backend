import { IAcademicSemester } from "../academicSemester/academicSemester.interface";
import { User } from "./users.model";

const findLastStudentUserId = async (): Promise<string | undefined> => {
  const userId = await User.findOne({ role: "student" }, { id: 1, _id: 0 }).sort({ createdAt: -1 }).lean();
  return userId?.id ? userId.id.substring(4) : undefined;
}

export const generateStudentId = async (academicSemester: IAcademicSemester): Promise<string> => {
  const LastUserId = await findLastStudentUserId()
  const currentId = LastUserId || String(0).padStart(5, "0");
  let incrementId = (parseInt(currentId) + 1).toString().padStart(5, '0');
  incrementId = `${academicSemester.year.substring(2)}${academicSemester.code}${incrementId}`;
  return incrementId;
}



// Faculty
const findLastFacultyId = async () => {
  const userId = await User.findOne({ role: "faculty" }, { id: 1, _id: 0 }).sort({ createdAt: -1 }).lean();
  return userId?.id;
}
export const generateFacultyId = async (): Promise<string | undefined> => {
  const lastFacultyId = await findLastFacultyId()
  const currentId = lastFacultyId || String(0).padStart(5, "0");
  let incrementId = (parseInt(currentId) + 1).toString().padStart(5, '0');
  incrementId = `F-${incrementId}`;
  return incrementId;
}
