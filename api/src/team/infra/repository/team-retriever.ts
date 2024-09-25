import { Team } from "../../domain/entity/team";
import { TeamRetriever } from "../../domain/port/team-retriever";
import { Client } from "pg";

export const teamRetriever: TeamRetriever = {
  getTeam: async (): Promise<Team[]> => {
    const client = new Client({
      host: "localhost",
      port: 5432,
      database: "app",
      user: "app",
      password: "app",
    });
    await client.connect();

    const res = await client.query("SELECT * FROM team");
    await client.end();

    const teams: Team[] = res.rows;
    return teams;
  },
};
