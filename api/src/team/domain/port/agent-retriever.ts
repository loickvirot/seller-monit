import { Agent } from "../entity/agent";

export interface AgentRetriever {
  getAll: () => Promise<Agent[]>;
}
