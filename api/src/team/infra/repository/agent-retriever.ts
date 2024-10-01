import { executeRequest } from "../../../common/pg/connection";
import { Agent } from "../../domain/entity/agent";
import { AgentRetriever } from "../../domain/port/agent-retriever";
import { Client } from "pg";

export interface GetAllRow {
  id: number;
  name: string;
  team_id: number;
  team_name: string;
}

export const agentRetriever: AgentRetriever = {
  getAll: async (): Promise<Agent[]> => {
    const res = await executeRequest<GetAllRow>(
      "SELECT agent.id, agent.name, team.id as team_id, team.name as team_name \
      FROM agent, team \
      WHERE team.id = agent.team"
    );

    return res.rows.map((row: GetAllRow) => rowToAgent(row));
  },
  getAllByTeam: async (id: number): Promise<Agent[]> => {
    const res = await executeRequest<GetAllRow>(
      "SELECT agent.id, agent.name, team.id as team_id, team.name as team_name \
      FROM agent, team \
      WHERE team.id = $1 \
      AND team.id = agent.team",
      [ id ]
    );

    return res.rows.map((row: GetAllRow) => rowToAgent(row));
  }
};

const rowToAgent = (row: GetAllRow) => ({
  id: row.id,
  name: row.name,
  team: {
    id: row.team_id,
    name: row.team_name,
  },
})
