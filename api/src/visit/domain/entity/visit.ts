import { Agent } from "../../../team/domain/entity/agent";

export interface Visit {
  id: number;
  agent: Agent;
  start: Date;
  end: Date;
  address: string;
  note: string;
}
