import { Team } from "../../domain/entity/team";
import { agentRetriever } from "../repository/agent-retriever";
import { getAllAgents } from "../../app/query/get-agent";

export const agentQuery = {
  getAll: async (): Promise<Team[]> => {
    return getAllAgents(agentRetriever);
  },
};
