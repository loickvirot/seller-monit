import { Team } from "../../domain/entity/team";
import { teamRetriever } from "../repository/team-retriever";
import { getAllTeams } from "../../app/query/get-team";

export const teamQuery = {
  getAll: async (): Promise<Team[]> => {
    return getAllTeams(teamRetriever);
  },
};
