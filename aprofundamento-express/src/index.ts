import express, {Request, Response} from "express";
import { v4 as generateId } from "uuid";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;
//1
app.get("/ping", (req:Request, res:Response) => {          
		res.send("Pong! 🏓")
})
//2
type ToDo={
	userId:number,
	id:number,
	title:string,
	completed:boolean
}
//3
const Afazeres:ToDo[]=[
	{
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: true
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: true
  },
]
//4
app.get('/todo/completed',(req:Request,res:Response)=>{
	const completed=Afazeres.filter(todo=>todo.completed===true)
	res.send(completed)
})
//5
app.post('/maketodo',(req:Request,res:Response)=>{
  const userName = req.headers.authorization;

  const todoName = req.body.title;
  if (!todoName) {
    res.status(400).send("Favor informar nome da tarefa no body.");
    return;
  }
  const newTodo = {
    userId: userName,
    id: generateId(),
    title: todoName,
    completed: false,
  };

  res.status(201).send([...Afazeres, newTodo]);

})
//6
app.put("/editstatus",(req:Request,res:Response)=>{
  const toDoStatus=req.body.completed

  if (!toDoStatus) {
    res.status(400).send("Favor informar o status da tarefa no body.");
    return;
  }
const newStatus={
  ...Afazeres,
  completed:toDoStatus
}
res.send(newStatus)
})
//7
app.delete("/deletetodo/:todoId",(req:Request,res:Response)=>{
  const todoId=Number(req.params.todoId)

  const newToDoList=Afazeres.forEach(todo => {
    if(todo.id===todoId){
      return {}
    }
    return newToDoList
  });
  res.send(Afazeres)
})
//8
app.get("/listatodos/:idUser",(req:Request,res:Response)=>{
  const idUser=Number(req.params.idUser);
Afazeres.forEach((user)=>{
    if(user.id===idUser){
      res.send(Afazeres)
    }else{
      res.status(404).send("Usuário não encontrado")
    }
  })
})