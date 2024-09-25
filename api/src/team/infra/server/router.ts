import express, { type Request, type Response } from "express";
import { teamQuery } from "../query/get-team";
import { agentQuery } from "../query/get-agent";

export const router = express.Router();

router.get("/", async (req: Request, res: Response): Promise<void> => {
  res.status(200);
  res.json(await teamQuery.getAll());
});

router.get("/agent", async (req: Request, res: Response): Promise<void> => {
  res.status(200);
  res.json(await agentQuery.getAll());
});
