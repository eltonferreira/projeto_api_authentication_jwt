import { Pool } from "pg";

const connectionString = "digite a conexão do banco";

const db = new Pool({ connectionString });

export default db;