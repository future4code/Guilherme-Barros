import express, {Express} from 'express'
import cors from 'cors'
import {AddressInfo} from "net";
export const app: Express = express()

app.use(express.json())
app.use(cors())

const server = app.listen( process.env.PORT || 3003, () => {
	if (server) {
	  const address = server.address() as AddressInfo
	  console.log(`Servidor rodando em http://localhost:${address.port}`)
	} else {
	  console.error(`Falha ao rodar o servidor.`)
	}
      })