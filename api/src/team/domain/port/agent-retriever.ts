import { Agent } from "../entity/agent";

export interface AgentRetriever {
  getAll: () => Promise<Agent[]>;
  getAllByTeam: (id: number) => Promise<Agent[]>
}
