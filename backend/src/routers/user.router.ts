import express from "express";
import { signUp, getUser, getUsers, loginUser } from "../controllers/user.controller";

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.post("/signup", signUp)
userRouter.post("/login", loginUser)
userRouter.get("/:id", getUser);

export default userRouter;
