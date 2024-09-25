import { type Router } from "express";
import { router } from "./infra/server/router";

export interface TeamModule {
  getRouter: () => Router;
}

export const teamModule = {
  getRouter: () => router,
};
