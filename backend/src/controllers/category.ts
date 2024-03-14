import { Request, Response } from "express";
import Category from "../models/category";
import { StatusCodes } from "http-status-codes";


export const getCategories = async(req: Request , res: Response) => {
   try {
    const categories = await Category.find({})

    res.status(StatusCodes.OK).json({message: "All categories fetched", categories})
   } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: "Sorry, something went wrong"})
   }
}
export const getCategory = async(req: Request , res: Response) => {
   try {

    const categoryId = req.params.id
    const category = await Category.findById({categoryId})

    res.status(StatusCodes.OK).json({message: "All categories fetched", category})
   } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: "Sorry, something went wrong"})
   }
}


export const createCategory = async (req: Request, res: Response) => {
    try {

        const newCategory = await Category.create(req.body)

        const {name} = req.body

        if(!name){
            return res.status(StatusCodes.BAD_REQUEST).json({message: 'Category name is required'})
        }

        const existingCategory = await Category.findOne({name : req.body.name})

        if(existingCategory){
            return res.status(StatusCodes.BAD_REQUEST).json({message: 'Category with this name already exists'})
        }

        res.status(StatusCodes.OK).json({message: 'Category added successfully.' , newCategory})
    } catch (error) {
        
    }
}