import { Team } from "../../domain/entity/team";
import { TeamRetriever } from "../../domain/port/team-retriever";

export const getTeam = async (repository: TeamRetriever): Promise<Team[]> => {
  return repository.getTeam();
};
