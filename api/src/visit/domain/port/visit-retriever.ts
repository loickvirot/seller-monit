import { Visit } from "../entity/visit";

export interface VisitRetriever {
  getAll: () => Promise<Visit[]>;
  get: (id: number) => Promise<Visit>;
  getTeamVisits: (id: number) => Promise<Visit[]>
}
