import { Team } from "../../domain/entity/team";
import { TeamRetriever } from "../../domain/port/team-retriever";

export const teamRetriever: TeamRetriever = {
  getTeam: (): Team[] => [
    { id: "1", name: "Team 1" },
    { id: "2", name: "Team 2" },
    { id: "3", name: "Team 3" },
  ],
};
