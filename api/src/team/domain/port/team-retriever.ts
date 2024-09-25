import { Team } from "../entity/team";

export interface TeamRetriever {
  getAll: () => Promise<Team[]>;
  get: (id: number) => Promise<Team>;
}
