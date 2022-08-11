import { UserBusiness } from "../../../src/business/User/UserBusiness"
import { UserInputDTO } from "../../../src/model/User"

export let idGenerator = { generate: jest.fn((): any => {
   return 'any_id'
 }) }

export let hashManager = {
   hash: jest.fn(),
   compare: jest.fn(() => false),
} as any

export const RoleAdminMock = {
   generateToken: jest.fn((paylod: any) => {
     return 'token_mockado'
   }),
   getData: jest.fn((token: any): any => {
     return {
       id: 'any_id',
       role: 'ADMIN'
     }
   })
 }

export let authenticator = {
   generateToken: jest.fn((data: any) => "token"),
} as any

export let userDatabase = {
   signup: jest.fn((input) => { }),
   getUserByEmail: jest.fn(async(email:string) => {
      return  { 
   id: 'any_id',
   name: 'any_name',
   email: 'any_email',
   password: 'any_password',
   role: 'ADMIN'}
})
} as any

export const input:UserInputDTO={
   name:"Guilherme",
   email:"guilherme@gmail.com",
   password:"123456",
   role:"ADMIN"
}
export const userBusinessMock={
   signup:jest.fn(async(input)=>{return "token"}),
   login:jest.fn(async(input)=>{return "token"})
}
export let userBusiness = new UserBusiness(
   idGenerator,hashManager,userDatabase,authenticator)