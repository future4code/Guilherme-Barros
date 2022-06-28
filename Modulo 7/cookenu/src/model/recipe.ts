export interface RecipeInputDTO{
	title:string,
	description:string
}
export interface RecipeEditInputDTO{
	title:string,
	description:string,
	createdAt:Date,
	userId:string,
	userName:string
}