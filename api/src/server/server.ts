import express from "express";
import { teamModule } from "../team/module";

const port = 3000;

export function serve(): void {
  const app = express();

  app.use("/team", teamModule.getRouter());

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}
