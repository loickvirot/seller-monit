import { Team } from "../../domain/entity/team";
import { teamRetriever } from "../repository/team-retriever";
import { getAllTeams, getTeam } from "../../app/query/get-team";

export const teamQuery = {
  getAll: async (): Promise<Team[]> => getAllTeams(teamRetriever),
  get: async (id: number): Promise<Team> => getTeam(id, teamRetriever),
};
