import { type Router } from "express";
import { router } from "./infra/server/router";

export interface VisitModule {
  getRouter: () => Router;
}

export const visitModule: VisitModule = {
  getRouter: () => router,
};
