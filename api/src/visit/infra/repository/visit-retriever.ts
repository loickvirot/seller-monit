import { executeRequest } from "../../../common/pg/connection";
import { Visit } from "../../domain/entity/visit";
import { VisitRetriever } from "../../domain/port/visit-retriever";

export interface VisitRow {
  id: number;
  address: string;
  note: string;
  start: Date;
  end: Date;
  agent: number;
  agent_name: string;
  team_id: number;
  team_name: string;
}

export const visitRetriever: VisitRetriever = {
  get: async (id: number): Promise<Visit> => {
    const res = await executeRequest<VisitRow>(
      "SELECT visit.*, agent.name as agent_name, team.name as team_name, team.id as team_id \
      FROM visit, agent, team \
      WHERE visit.id = $1 \
      AND visit.agent = agent.id \
      AND agent.team = team.id",
      [id]
    );

    const data = res.rows[0];
    return rowToVisit(data);
  },
  getAll: async (): Promise<Visit[]> => {
    const res = await executeRequest<VisitRow>(
      "SELECT visit.*, agent.name as agent_name, team.name as team_name, team.id as team_id \
      FROM visit, agent, team \
      WHERE visit.agent = agent.id \
      AND agent.team = team.id"
    );
    return res.rows.map((row: VisitRow) => rowToVisit(row));
  },
};

const rowToVisit = (row: VisitRow): Visit => ({
  id: row.id,
  start: row.start,
  end: row.end,
  address: row.address,
  agent: {
    id: row.agent,
    name: row.agent_name,
    team: {
      id: row.team_id,
      name: row.team_name,
    },
  },
  note: row.note,
});
