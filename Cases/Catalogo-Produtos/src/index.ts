import { app } from "./app";
import { productRouter } from "./routes/productRouter";
import { userRouter } from "./routes/userRouter";

app.use('/user',userRouter)
app.use('/product',productRouter)