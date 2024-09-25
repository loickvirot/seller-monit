import { Team } from "../../domain/entity/team";
import { TeamRetriever } from "../../domain/port/team-retriever";

export const teamRetriever: TeamRetriever = {
  getTeam: (): Team[] => [
    { id: "SO", name: "Sud ouest" },
    { id: "SE", name: "Sud est" },
    { id: "N", name: "Nord" },
    { id: "P", name: "Paris" },
  ],
};
