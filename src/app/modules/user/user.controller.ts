import { NextFunction, Request, Response } from "express";
import { createUserToDB, getUserByIdFromDB, getUsersFromDB } from "./user.service";

export const createUser = async (req: Request, res: Response, next: NextFunction ) => {
    const data = req.body;
    const user = await createUserToDB(data);
    res.status(201).json({
        status: "created",
        data: user
    })
}

export const getUsers = async (req: Request, res: Response, next: NextFunction ) => {
    const users = await getUsersFromDB();
    res.status(200).json({
        status: "success",
        data: users
    })
}

export const getUserById =async (req: Request, res: Response, next: NextFunction) =>{
    const {id} = req.params;
    const user = await getUserByIdFromDB(id);
    res.status(200).json({
        status: "success",
        data: user
    })
}