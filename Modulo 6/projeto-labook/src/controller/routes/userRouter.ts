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
userRouter.get("/type/:type",(req,res)=>userController.getPostByType(req,res))
userRouter.post("/comment",(req,res)=>userController.publishComment(req,res))
userRouter.post("/like",(req,res)=>userController.likePost(req,res))
userRouter.delete("/deslike/:post_id",(req,res)=>userController.deslikePost(req,res))