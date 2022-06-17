import { app } from "./app";
import { userRouter } from "./src/controller/userRouter";

app.use("/user",userRouter)