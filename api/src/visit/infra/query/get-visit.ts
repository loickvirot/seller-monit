import { getVisit, getVisits } from "../../app/query/get-visit";
import { Visit } from "../../domain/entity/visit";
import { visitRetriever } from "../repository/visit-retriever";

export const visitQuery = {
  getAll: async (): Promise<Visit[]> => getVisits(visitRetriever),
  get: (id: number): Promise<Visit> => getVisit(visitRetriever, id),
};
