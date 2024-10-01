import { Agent } from "../../domain/entity/agent";
import { AgentRetriever } from "../../domain/port/agent-retriever";

export const getAllAgents = async (
  repository: AgentRetriever
): Promise<Agent[]> => repository.getAll();

export const getAgentsByTeam = async (
  repository: AgentRetriever,
  id: number
): Promise<Agent[]> => repository.getAllByTeam(id);