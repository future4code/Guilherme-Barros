import express, { Request,Response } from 'express'
import cors from 'cors'
import internal from 'stream'


const app=express()
app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {          
		res.send("Hello from Express")
})

type Post={
	id:string,
	photo:string,
	like:number,
	comments:string[],
	tags:string[],

}

type User={
	id:number,
	name:string,
	phone:string,
	email:string,
	website:string,
	posts:Post[]
}
//Criados os posts dentro do array de usuários pela facilidade em encontrar cada post de cada usuário 
const usuarios:User[]=[
	{id:1,name:'Luiz',phone:'11985628555',email:'luiz@gmail.com',website:'www.luiz.com.br',posts:[{id:'1',photo:'everst.png',like:1,comments:['cool','aweasome','incredrible'],tags:['mountain','sky','snow']}]},
	{id:2,name:'Luan',phone:'11985628556',email:'luan@gmail.com',website:'www.luan.com.br',posts:[{id:'2',photo:'everst.png',like:1,comments:['cool','aweasome','incredrible'],tags:['mountain','sky','snow']}]},
	{id:3,name:'Lumena',phone:'11985628557',email:'lumena@gmail.com',website:'www.lumena.com.br',posts:[{id:'3',photo:'everst.png',like:1,comments:['cool','aweasome','incredrible'],tags:['mountain','sky','snow']}]},
	{id:4,name:'Lucio',phone:'11985628558',email:'lucio@gmail.com',website:'www.lucio.com.br',posts:[{id:'4',photo:'everst.png',like:1,comments:['cool','aweasome','incredrible'],tags:['mountain','sky','snow']}]},
	{id:5,name:'Lucas',phone:'11985628559',email:'lucas@gmail.com',website:'www.lucas.com.br',posts:[{id:'5',photo:'everst.png',like:1,comments:['cool','aweasome','incredrible'],tags:['mountain','sky','snow']}]}
]

app.listen(3003,()=>console.log('Server rodando...'));
app.get('/users',(req,res)=>{
	const users=usuarios.map(user=>user)
	res.status(200).send(users)
})
app.get('/posts',(req,res)=>{
	const posts=usuarios.map(user=>user.posts)
	
	res.status(200).send(posts)
})
app.get('/:iduser/posts',(request:Request,response:Response)=>{
	const iduser=request.params.iduser
	const posts=usuarios.map(user=>user.posts).flat(1)
	const users=usuarios.map(user=>user)
	let poster
	posts.forEach((post)=>{		
		if(iduser==post.id){
			poster=post
		}})
	response.send(poster)
})