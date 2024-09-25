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
    const client = new Client({
      host: "localhost",
      port: 5432,
      database: "app",
      user: "app",
      password: "app",
    });
    await client.connect();

    const res = await client.query<GetAllRow>(
      "SELECT agent.id, agent.name, team.id as team_id, team.name as team_name \
      FROM agent, team \
      WHERE team.id = agent.team"
    );
    await client.end();

    return res.rows.map((row: GetAllRow) => ({
      id: row.id,
      name: row.name,
      team: {
        id: row.team_id,
        name: row.team_name,
      },
    }));
  },
};
