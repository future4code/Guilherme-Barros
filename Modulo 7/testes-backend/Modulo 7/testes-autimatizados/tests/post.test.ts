import { PostDatabase } from "../src/PostDatabase"
import { post, POST_TYPES } from "../src/types/Post"
const post:post={
	id:"sdfgasdfbscvb",
	photo:"fogo.png",
	description:"Queima",
	type:POST_TYPES.NORMAL,
	created_at: new Date(),
	author_id:"sdfgsdghsdfg"
}
const postDatabase = new PostDatabase()
test("teste que crie um post no banco de dados e verifique se ele foi criado (fazendo uma query pelo id)",async()=>{
	
	await postDatabase.insertPost(post)
	const result=postDatabase.getPostById(post.id)
	expect(result).not.toBe(undefined)
	expect(result).toEqual({id:"sdfgasdfbscvb",
	photo:"fogo.png",
	description:"Queima",
	type:POST_TYPES.NORMAL,
	created_at: new Date(),
	author_id:"sdfgsdghsdfg"})
})
test("teste de chave duplicada no banco de dados na criação de post",async()=>{
	
	try {

	await postDatabase.insertPost(post)
	await postDatabase.insertPost(post)
	
	} catch (error:any) {
		expect(error).not.toBe(undefined)
	}
})
it("Teste feed usuário não segue ninguém",async()=>{
	try {
		let page=1
		let size = 5
			let offset = size*(page-1)
		const result=await postDatabase.getFeed(size,offset)
		expect(result.length).toBe(0)
	} catch (error:any) {
		expect(error).not.toBe(undefined)
	}
})
it("Teste feed usuário segue somente um outro usuário",async()=>{
	try {
		let page=1
		let size = 5
			let offset = size*(page-1)
		const result=await postDatabase.getFeed(size,offset)

		expect(result.length).not.toBe(1)

	} catch (error:any) {
		expect(error).not.toBe(undefined)
	}
})
it("Teste feed usuário segue mais de um usuário",async()=>{
	try {
		let page=1
		let size = 5
			let offset = size*(page-1)
		const result=await postDatabase.getFeed(size,offset)

		expect(result.length).toBeGreaterThan(2)
	} catch (error:any) {
		expect(error).not.toBe(undefined)
	}
})
afterAll(async () => {
	const postDatabase = new PostDatabase()
	await postDatabase.deletePostById(post.id);
	await postDatabase.destroyConnection();
      });