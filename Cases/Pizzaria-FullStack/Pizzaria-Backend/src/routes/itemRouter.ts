import express from "express";
import { ItemController } from "../controller/ItemController";

export const itemRouter=express.Router()

const itemController= new ItemController()

itemRouter.post("/create",itemController.create)
itemRouter.delete("/delete/:itemId",itemController.delete)
itemRouter.get("/cart",itemController.getActives)