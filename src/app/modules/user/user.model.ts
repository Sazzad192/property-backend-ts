import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
    name: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
    },
    dob: { type: String },
    gender: { type: String, enum: ["male", "female"] },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String },
  });

  const UserModel = model<IUser>("user", userSchema);

  export default UserModel;