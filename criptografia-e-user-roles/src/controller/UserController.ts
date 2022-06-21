import { UserDatabase } from './../data/UserDatabase';
import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { EditUserInputDTO, LoginInputDTO, UserInputDTO } from "../model/user";
import { HashManager } from "../services/HashManager";

export class UserController {
    
      public signup = async (req: Request, res: Response) => {
        try {
          const { name, nickname, email, password,role } = req.body;
       
    
          const input: UserInputDTO = {
            name,
            nickname,
            email,
            password,
            role
          };
          const userBusiness = new UserBusiness()
          const token = await userBusiness.createUser(input);
    
          res.status(201).send({ message: "Usuário criado!", token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };   
      
      public login = async (req: Request, res: Response) => {
        try {
          const { email, password,role } = req.body;
    
          const input: LoginInputDTO = {
            email,
            password,
            role
          };
        

          const userBusiness = new UserBusiness()
          const token = await userBusiness.login(input);
    
          res.status(200).send({ message: "Usuário logado!", token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }; 

      public getUserData=async(req: Request, res: Response):Promise<any>=> {
        try {
          const authorization=req.headers.authorization!
    
          const userBusiness = new UserBusiness()
          const result =await userBusiness.getUserData(authorization as string) 
          res.status(200).send({email:result.email,password:result.password})
        } catch (error: any) {
          res.status(400).send(error.message);
              }
            } 
}
