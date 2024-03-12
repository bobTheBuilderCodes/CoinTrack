import { Request, Response } from 'express';
import Users from '../models/user.schema';
import {StatusCodes} from 'http-status-codes'
import bcrypt from 'bcrypt'

export const getUsers = (req: Request, res: Response) => {
    res.send("Hello all users");
};

export const getUser = (req: Request<{ id: string }>, res: Response) => {
    const userId = req.params.id;
    res.send(`Hello user with id ${userId}`);
};

// export const createUser = async (req: Request, res: Response) => {
//     try {
//         const salt = bcrypt.genSalt(10)
//         const hashedPassword = bcrypt.hash(req.body.password, salt)
//         const newUser = await Users.create({...req.body, hashedPassword});
//         res.status(StatusCodes.CREATED).json({ message: "User created successfully", newUser });
//     } catch (error) {
//         console.error("Error creating user:", error);
//         res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Failed to create user" });
//     }
// };

export const createUser = async (req: Request, res: Response) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = await Users.create({ ...req.body, password: hashedPassword });
        res.status(StatusCodes.CREATED).json({ message: "User created successfully", newUser });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Failed to create user" });
    }
};

