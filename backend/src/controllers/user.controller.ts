import { Request, Response } from 'express';
import Users from '../models/user.schema';


export const getUsers = (req: Request, res: Response) => {
    res.send("Hello all users");
};

export const getUser = (req: Request<{ id: string }>, res: Response) => {
    const userId = req.params.id;
    res.send(`Hello user with id ${userId}`);
};

export const createUser = (req: Request, res: Response) => {
   const newUser = Users.create(req.body)
    res.json({message: "User created successfully" , newUser});
};
