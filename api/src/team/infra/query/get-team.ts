import { Team } from "../../domain/entity/team";
import { teamRetriever } from "../repository/team-retriever";
import { getTeam } from "../../app/query/get-team";

export const getTeamQuery = (): Team[] => {
  return getTeam(teamRetriever);
};
