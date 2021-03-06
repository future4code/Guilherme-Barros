import dotenv from "dotenv";
import express from "express";
import cors from 'cors'
import {AddressInfo} from "net";
import { itemRouter } from "./routes/itemRouter";
import { orderRoute } from "./routes/orderRouter";
import { pizzaRouter } from "./routes/pizzaRouter";
import { userRouter } from "./routes/userRouter";
dotenv.config();
const app = express();
app.use(cors())
app.use(express.json());
app.use(cors())
app.use("/item",itemRouter)
app.use("/user", userRouter);
app.use('/pizza',pizzaRouter)
app.use('/order',orderRoute)
const server = app.listen(process.env.PORT || 3003, () => {
	if (server) {
	  const address = server.address() as AddressInfo;
	  console.log(`Servidor rodando em http://localhost:${address.port}`);
	} else {
	  console.error(`Falha ao rodar o servidor.`);
	}
      });