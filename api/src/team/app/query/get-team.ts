import { Team } from "../../domain/entity/team";
import { TeamRetriever } from "../../domain/port/team-retriever";

export const getAllTeams = async (repository: TeamRetriever): Promise<Team[]> =>
  repository.getAll();

export const getTeam = (id: number, repository: TeamRetriever): Promise<Team> =>
  repository.get(id);
