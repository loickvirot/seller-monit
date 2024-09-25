import express, { type Request, type Response } from "express";
import { teamQuery } from "../query/get-team";
import { agentQuery } from "../query/get-agent";

export const router = express.Router();

router.get("/", async (req: Request, res: Response): Promise<void> => {
  res.status(200);
  res.json(await teamQuery.getAll());
});

router.get("/:id", async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    res.status(400);
    res.json("Bad request");
    return;
  }

  res.status(200);
  res.json(await teamQuery.get(id));
});

router.get("/:id/agent", async (req: Request, res: Response): Promise<void> => {
  res.status(200);
  res.json(await agentQuery.getAll());
});
