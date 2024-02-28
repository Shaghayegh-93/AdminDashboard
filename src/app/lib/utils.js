import { Mongoose } from "mongoose";

export const connectToDB = async () => {
  const connection = {};
  try {
    if (connection.isConnected) return;
    const db = await Mongoose.connect(process.env.MONGO_URI);
    connection.isConnected = db.connection[0].readyState;
  } catch (error) {
    throw new Error(error);
  }
};
