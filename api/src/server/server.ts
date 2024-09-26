import express from "express";
import { teamModule } from "../team/module";
import { visitModule } from "../visit/module";

const port = 3001;

export function serve(): void {
  const app = express();

  app.use("/team", teamModule.getRouter());
  app.use("/visit", visitModule.getRouter());

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}
