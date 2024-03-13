import express from "express";
import { signUp,  loginUser } from "../controllers/auth";

const authRouter = express.Router();


authRouter.post("/signup", signUp)
authRouter.post("/login", loginUser)


export default authRouter;
