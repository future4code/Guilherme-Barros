import { app } from "./app";
import { participantRouter } from "./routes/participantRouter";

app.use("/participant",participantRouter)