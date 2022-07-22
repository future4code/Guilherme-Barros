import express from "express";
import { PizzaController } from "../controller/PizzaController";

export const pizzaRouter=express.Router()
const pizzaController=new PizzaController()

pizzaRouter.get('/all',pizzaController.getAll)
pizzaRouter.get('/:id',pizzaController.getById)
pizzaRouter.post('/create',pizzaController.create)
