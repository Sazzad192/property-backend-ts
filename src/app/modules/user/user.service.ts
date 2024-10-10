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


  export async function getUserByIdFromDB(payload: string): Promise <IUser | null> {
    const user = await UserModel.findOne({id:payload});
    return user;
  }