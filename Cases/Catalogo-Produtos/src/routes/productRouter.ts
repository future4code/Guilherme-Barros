import express from "express";
import { ProductController } from "../controller/ProductController";


export const productRouter = express.Router();
const productController=new ProductController()

productRouter.post('/insert',productController.insert)
productRouter.get('/search/id',productController.searchById)
productRouter.get("/search/name",productController.searchByName)
productRouter.get("/search/tag",productController.searchByTag)