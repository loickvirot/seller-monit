import { Request, Response, Router } from "express";
import { visitQuery } from "../query/get-visit";
import { getVisitsByTeam } from "../../app/query/get-visit";
import { visitRetriever } from "../repository/visit-retriever";

export const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const { team } = req.query;

  if (team) {
    await returnVisitsByTeam(req, res)
    return;
  }

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

const returnVisitsByTeam = async (req: Request, res: Response) => {
  const id = Number(req.query.team);
  
  if (isNaN(id)) {
    res.status(400);
    res.json("Bad request");
    return;
  }

  res.status(200);
  res.json(await getVisitsByTeam(visitRetriever, id));
}
