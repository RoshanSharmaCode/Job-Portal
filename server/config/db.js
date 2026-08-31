import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["8.8.8.8"]);

const conectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Database connected");
  });

  await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`);
};

export default conectDB;