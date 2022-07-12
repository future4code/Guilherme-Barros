import * as jwt from "jsonwebtoken"
import { ITokenGenerator, ROLE } from "../business/ports"

export type AuthenticationData = {
   id: string,
   role: ROLE
}

export class TokenGenerator implements ITokenGenerator{
   
   generate (args: AuthenticationData){
      return jwt.sign(
         args,
         process.env.JWT_KEY as string,
         {
            expiresIn: "24min"
         }
      )
   } 
   getTokenData (token: string) {
      return jwt.verify(
         token,
         process.env.JWT_KEY as string
      ) as AuthenticationData
   } 
   
}

