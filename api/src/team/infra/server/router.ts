import express, { type Request, type Response } from "express";
import { getTeamQuery } from "../query/get-team";

export const router = express.Router();

router.get("/", (req: Request, res: Response): void => {
  res.status(200);
  res.json(getTeamQuery());
});
