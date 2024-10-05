import express from "express";
import cors from "cors";
import { Schema } from "mongoose";

const app = express();
app.use(cors());

//perse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route
app.get("/", (req, res) => {
  //inserting a test data into mongodb
  /*
    1: Interface
    2: Schema
    3: Model
    4: DB Query
  */
  //creating an interface
  interface IUser {
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

  //creating schema using interface
  const userSchema = new Schema<IUser>({
    id:{type:String, required:true, unique:true},
    role:{type:String, required:true},
    password:{type:String, required:true},
    name:{
      firstName:{type:String, required:true},
      lastName:{type:String, required:true}
    },
    dob: {type:String},
    gender: {type:String, enum:['male' , 'female']},
    email: {type:String, required:true},
    phone: {type:String, required:true},
    address: {type:String},
  });

});

export default app;
