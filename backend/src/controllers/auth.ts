import { Request, Response } from "express";
import Users from "../models/user";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



export const signUp = async (req: Request, res: Response) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const {fullname, email, password} = req.body
    if(!fullname || !email || !password){
      return res.status(StatusCodes.BAD_REQUEST).json({message: "Fullname, email and password are required"})
    }

    const existingUser = await Users.findOne({
      $or: [{ fullname: req.body.fullname }, { email: req.body.email }],
    });

    if(existingUser){
        return res.status(StatusCodes.BAD_REQUEST).json({message: `User with this credentials already exists`})
    }
    const newUser = await Users.create({
      ...req.body,
      password: hashedPassword,
    });

    const userDetails = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET as string, {
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


export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    
    if (!email || !password) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Please provide credentials to log in' });
    }

    const user = await Users.findOne({ email });

   
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Invalid Credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET as string, {
      expiresIn: "2d",
    });

    
    return res.status(StatusCodes.OK).json({
      message: "Login successful",
      userDetails: {
        token,
        userId: user?._id,
        fullname: user?.fullname,
      },
    });

  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Failed to log in user" });
  }
};
