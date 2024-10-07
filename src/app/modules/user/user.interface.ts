export interface IUser {
    id: string;
    role: "user";
    password: string;
    name: {
      firstName: string;
      lastName: string;
    };
    dob?: string;
    gender: "male" | "female";
    email: string;
    phone: string;
    address?: string;
  }