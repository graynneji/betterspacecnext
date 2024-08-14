import { Pool } from "pg";
const url =
  "postgres://default:nhB87XObLNCi@ep-white-surf-a4636k0v.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require";

const pool = new Pool({
  connectionString: url,
  ssl: {
    rejectUnauthorized: false,
  },
});
export default pool;
