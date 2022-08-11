import express from "express";
import { ParticipantController } from "../controller/ParticipantController";

export const participantRouter=express.Router()
const participantController=new ParticipantController()

participantRouter.post("/create",participantController.insert)