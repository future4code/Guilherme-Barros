import { product } from "../../../src/types/product"
import { ProductBusiness } from '../../../src/business/Product/ProductBusiness';
import { ProductDatabase } from '../../../src/data/Product/ProductDatabase';

export let idGenerator = { generate: jest.fn((): any => {
	return 'any_id'
      }) }
      export let authenticator = {
	generateToken: jest.fn((data: any) => "token"),
     } as any
     export const products:product[]=[ {
	"id": 8371,
	"name": "VESTIDO TRICOT CHEVRON",
	"tags": ["balada", "neutro", "delicado", "festa"]
      },
      {
	"id": 8367,
	"name": "VESTIDO MOLETOM COM CAPUZ MESCLA",
	"tags": ["casual", "metal", "metal"]
      },
      {
	"id": 8363,
	"name": "VESTIDO CURTO MANGA LONGA LUREX",
	"tags": ["colorido", "metal", "delicado", "estampas", "passeio"]
      }
]
export const token=authenticator.generateToken()
export const searchId=1
export const searchName="any_name"
export const searchTag="any_tag"
export const productMock={
	id:1,
	name:"any_name"
}
export const productDatabase=new ProductDatabase()
     
export const productBusiness=new ProductBusiness(productDatabase,idGenerator)
 