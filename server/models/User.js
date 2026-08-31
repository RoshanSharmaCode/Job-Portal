import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  _id: { type: String, require: true },
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  resume: { type: String },
  image: { type: String, require: true },
});

const User = mongoose.model("User", UserSchema);

export default User;
