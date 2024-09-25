import { executeRequest } from "../../../common/pg/connection";
import { Team } from "../../domain/entity/team";
import { TeamRetriever } from "../../domain/port/team-retriever";

export const teamRetriever: TeamRetriever = {
  getAll: async (): Promise<Team[]> => {
    const res = await executeRequest<Team>("SELECT * FROM team");
    return res.rows;
  },
};
