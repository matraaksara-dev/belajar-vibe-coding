import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL || "mysql://root:password@127.0.0.1:3306/belajar_vibe";

const connection = await mysql.createPool(connectionString);

export const db = drizzle(connection, { schema, mode: "default" });
export type DbType = typeof db;
export * from "./schema";
