import { Client, QueryResult, QueryResultRow } from "pg";

const createClient = (): Client =>
  new Client({
    host: "localhost",
    port: 5432,
    database: "app",
    user: "app",
    password: "app",
  });

export const executeRequest = async <T extends QueryResultRow>(
  request: string,
  params: [number | string] | [] = []
): Promise<QueryResult<T>> => {
  const client = createClient();
  await client.connect();

  try {
    const res = await client.query<T>(request, params);
    return res;
  } catch (err) {
    throw err;
  } finally {
    await client.end();
  }
};
