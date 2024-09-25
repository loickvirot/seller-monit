import { Team } from "../../domain/entity/team";
import { TeamRetriever } from "../../domain/port/team-retriever";

export function getTeam(repository: TeamRetriever): Team[] {
  return repository.getTeam();
}
