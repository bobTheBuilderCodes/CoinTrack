import express from "express";
import { createUser, getUser, getUsers } from "../controllers/user.controller";

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.post("/", createUser)
userRouter.get("/:id", getUser);

export default userRouter;
