import express from "express";
import { UserBusiness } from "../../business/UserBusiness";
import { UserDatabase } from "../../data/UserDatabase";
import { UserController } from "../UserController";
export const userRouter = express.Router()
const userDatabase = new UserDatabase()

const userBusiness = new UserBusiness(userDatabase)
const userController = new UserController(userBusiness)

userRouter.post('/create',(req, res)=> userController.createUser(req, res))
userRouter.post('/createFriendship',(req,res)=>userController.createFriendship(req,res))
userRouter.delete('/deleteFriendship/:friend_id',(req,res)=>userController.deleteFriendship(req,res))
userRouter.get("/feed",(req,res)=>userController.getFeed(req,res))