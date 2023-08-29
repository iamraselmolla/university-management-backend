import { User } from "./users.model";

const getlastUserId = async () => {
  const userId = await User.findOne({}, { id: 1, _id: 0 }).sort({ createdAt: -1 }).lean();
  return userId?.id
}
const generateUserId = async () => {
  const LastUserId = getlastUserId()
  const currentId = await LastUserId || String(0).padStart(5, "0");
  const incrementId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  return incrementId;
}
export default generateUserId;
