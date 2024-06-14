import { IAcademicSemester } from "../academicSemester/academicSemester.interface";
import { User } from "./users.model";

const findLastStudentUserId = async () => {
  const userId = await User.findOne({}, { id: 1, _id: 0 }).sort({ createdAt: -1 }).lean();
  return userId?.id
}
const generateStudentId = async (academicSemester: IAcademicSemester) => {
  const LastUserId = findLastStudentUserId()
  const currentId = await LastUserId || String(0).padStart(5, "0");
  let incrementId = (parseInt(currentId) + 1).toString().padStart(5, '0');
  incrementId = `${academicSemester.year.substring(2)}${academicSemester.code}${incrementId}`;
  return incrementId;
}
export default generateStudentId;
