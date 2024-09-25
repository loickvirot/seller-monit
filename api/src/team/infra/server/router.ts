import express, { type Request, type Response } from "express";
import { getTeamQuery } from "../query/get-team";

export const router = express.Router();

router.get("/", async (req: Request, res: Response): Promise<void> => {
  res.status(200);
  res.json(await getTeamQuery());
});
