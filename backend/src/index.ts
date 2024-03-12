import express from "express";
import connectToDB from "../db/connect";
import dotenv from "dotenv";
import userRouter from "./routers/user.router";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/v1/users/", userRouter)

app.get("/", (req, res) => {
  res.send("Hello, Worlddd");
});

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
