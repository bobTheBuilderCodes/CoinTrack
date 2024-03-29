import express from "express";
import connectToDB from "../db/connect";
import dotenv from "dotenv";
import authRouter from "./routers/auth";
import userRouter from "./routers/users";
import authMiddleware from "./middlewares/auth";
import categoryRouter from "./routers/category";
import cors from 'cors' 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors())

app.use("/api/v1/", authRouter)
app.use("/api/v1/users", authMiddleware, userRouter)
app.use("/api/v1/categories", categoryRouter)


async function startServer() {
  try {
    console.log("Connecting to DB....");
    await connectToDB(process.env.MONGO_URI as string);
    app.listen(PORT, () => console.log(`Server connected at port ${PORT}`));
    console.log(`Connection to DB successful...`);
  } catch (error) {
    console.log(error);
  }
}

startServer();
