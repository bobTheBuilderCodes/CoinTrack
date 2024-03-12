import { Request, Response } from "express";
import Users from "../models/user.schema";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { STATUS_CODES } from "http";

export const getUsers = async (req: Request, res: Response) => {
    try {
      const allUsers = await Users.find({}).lean(); 
      res.status(StatusCodes.OK).json({ message: "All users fetched successfully", allUsers });
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Failed to fetch users" });
    }
  };
  
export const getUser = (req: Request<{ id: string }>, res: Response) => {
  const userId = req.params.id;
  res.send(`Hello user with id ${userId}`);
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // const existingUser = await Users.find({...req.body.fullname})
    // if(existingUser){
    //     return res.status(StatusCodes.BAD_REQUEST).json({message: `User with this username already exists`})
    // }
    const newUser = await Users.create({
      ...req.body,
      password: hashedPassword,
    });

    const userDetails = jwt.sign({ userId: newUser._id }, "jwtSecret", {
      expiresIn: "2d",
    });

    res.status(StatusCodes.CREATED).json({
      message: "User created successfully",
      userDetails: {
        token: userDetails, 
        userId: newUser._id, 
        fullname: req.body.fullname, 
      },
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Failed to create user" });
  }
};
