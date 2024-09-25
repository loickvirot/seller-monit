import { executeRequest } from "../../../common/pg/connection";
import { Team } from "../../domain/entity/team";
import { TeamRetriever } from "../../domain/port/team-retriever";

export const teamRetriever: TeamRetriever = {
  getAll: async (): Promise<Team[]> => {
    const res = await executeRequest<Team>("SELECT * FROM team");
    return res.rows;
  },
  get: async (id: number): Promise<Team> => {
    const res = await executeRequest<Team>(
      "SELECT * FROM team WHERE team.id = $1",
      [id]
    );

    return res.rows[0];
  },
};
