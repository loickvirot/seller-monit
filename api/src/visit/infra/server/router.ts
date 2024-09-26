import { Request, Response, Router } from "express";
import { visitQuery } from "../query/get-visit";

export const router = Router();

router.get("/", async (req: Request, res: Response) => {
  res.status(200);
  res.json(await visitQuery.getAll());
});

router.get("/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    res.status(400);
    res.json("Bad request");
    return;
  }

  res.status(200);
  res.json(await visitQuery.get(id));
});
