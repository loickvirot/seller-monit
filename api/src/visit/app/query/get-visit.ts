import { Visit } from "../../domain/entity/visit";
import { VisitRetriever } from "../../domain/port/visit-retriever";

export const getVisits = async (repository: VisitRetriever): Promise<Visit[]> =>
  repository.getAll();

export const getVisit = async (
  repository: VisitRetriever,
  id: number
): Promise<Visit> => repository.get(id);

export const getVisitsByTeam = async (
  repository: VisitRetriever,
  id: number
): Promise<Visit[]> => repository.getTeamVisits(id);
