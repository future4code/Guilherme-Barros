import app from "./controller/app";
import { recipeRouter, userRouter } from "./controller/routes";

app.use('/user/',userRouter)
app.use('/recipe/',recipeRouter)