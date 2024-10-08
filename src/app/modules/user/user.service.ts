import { IUser } from "./user.interface";
import UserModel from "./user.model";

export async function createUserToDB(payload:IUser) : Promise <IUser> {
    const user = new UserModel(payload);
    await user.save();
    return user;
  }

  export async function getUsersFromDB() {
    const users = await UserModel.find();
    return users;
  }