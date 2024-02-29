import { User } from "./models";
import { connectTodb } from "./utils";

export const fetchUsers = async (q) => {
  const regex = new RegExp(q, "i");
  try {
    connectTodb();
    const users = await User.find({ username: { $regex: regex } });
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("error");
  }
};
