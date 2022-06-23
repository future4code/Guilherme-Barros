import { RecipeController } from './RecipeController';
import express from 'express'
import { RecipeBusiness } from '../business/RecipeBusiness'
import { UserBusiness } from '../business/UserBusiness'


import { UserController } from './UserController'

export const userRouter=express.Router()
export const recipeRouter=express.Router()
const userBusiness = new UserBusiness()
const userController=new UserController(userBusiness)

const recipeBusiness=new RecipeBusiness()
const recipeController=new RecipeController(recipeBusiness)

userRouter.post('/signup',(req,res)=>userController.signup(req,res))
userRouter.post("/login",(req,res)=>userController.login(req,res))
userRouter.post('/follow',(req,res)=>userController.follow(req,res))
userRouter.get('/profile',(req,res)=>userController.getUserData(req,res))
userRouter.get('/:id',(req,res)=>userController.getUserById(req,res))
userRouter.delete('/unfollow/:id',(req,res)=>userController.unfollow(req,res))

recipeRouter.post("/create",(req,res)=>recipeController.createRecipe(req,res))
recipeRouter.get("/:id",(req,res)=>recipeController.getRecipeById(req,res))