import express from "express";
import { OrderController } from "../controller/OrderController";

export const orderRoute=express.Router()

const orderController=new OrderController()

orderRoute.get('/all',orderController.getAll)
orderRoute.get('/:id',orderController.getById)
orderRoute.get('/details/:id',orderController.getOrderDetails)
orderRoute.post("/create",orderController.create)