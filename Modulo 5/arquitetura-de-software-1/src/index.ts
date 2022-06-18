import {app} from "./controller/app"
import { UserController } from "./controller/userController"

const userController = new UserController()

app.post("/createUser", userController.createUser)

app.get("/all",userController.getAllUsers)

app.delete("/:id",userController.deleteUser)