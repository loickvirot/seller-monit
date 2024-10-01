import { Visit } from "../entity/visit";

export interface VisitRetriever {
  getAll: () => Promise<Visit[]>;
  get: (id: number) => Promise<Visit>;
  getTeamVisitsByDate: (id: number, date: Date) => Promise<Visit[]>
}
