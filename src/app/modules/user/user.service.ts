import UserModel from "./user.model";

export async function createUserToDB() {
    const user = new UserModel({
      id: "003",
      role: "user",
      password: "string",
      name: {
        firstName: "KM Sazzadul",
        lastName: "Islam",
      },
      gender: "male",
      email: "sazadulbg@gmail.com",
      phone: "01755632445",
    });

    await user.save();
    return user;
  }