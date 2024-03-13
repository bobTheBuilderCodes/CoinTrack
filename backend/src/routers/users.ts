import express from "express";


const userRouter = express.Router();


userRouter.get("/", (req, res)=>{
   res.json({message: "Middleware working well bro"})
   
})



export default userRouter;
