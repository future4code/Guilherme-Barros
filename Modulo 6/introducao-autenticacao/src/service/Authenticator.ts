import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../model/AuthenticationData";
import dotenv from "dotenv"

dotenv.config()
export class Authenticator  {
  public generateToken = (id:string) => {
    const token = jwt.sign({id},
         process.env.JWT_KEY as string,
          { expiresIn: "2h" });
          console.log("Payload: "+id);
          
    return token;
  };

 public getTokenData = (token: string): AuthenticationData => {
  console.log(token);
  
      const payload = jwt.verify(token, process.env.JWT_KEY as string) as any
      console.log(payload);
      
      const result: AuthenticationData = {id: payload.id}
    console.log(payload.id);
    
    
      
      return result
  }
}