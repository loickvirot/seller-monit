import express, { type Request, type Response } from "express";
import { getTeamQuery } from "../query/get-team";
import { getAllAgents } from "../../app/query/get-agent";
import { agentRetriever } from "../repository/agent-retriever";
import { getAgentQuery as getAllAgentQuery } from "../query/get-agent";

export const router = express.Router();

router.get("/", async (req: Request, res: Response): Promise<void> => {
  res.status(200);
  res.json(await getTeamQuery());
});

router.get("/agent", async (req: Request, res: Response): Promise<void> => {
  res.status(200);
  res.json(await getAllAgentQuery());
});
