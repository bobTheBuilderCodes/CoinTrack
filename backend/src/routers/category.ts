import express from "express";
import { createCategory, getCategories, getCategory } from "../controllers/category";


const categoryRouter = express.Router();


categoryRouter.get("/", getCategories)
categoryRouter.get("/:id", getCategory)
categoryRouter.post("/", createCategory)




export default categoryRouter;
