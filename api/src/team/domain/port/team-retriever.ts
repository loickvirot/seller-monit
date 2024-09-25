import { Team } from "../entity/team";

export interface TeamRetriever {
  getTeam: () => Team[];
}
