import { open } from "sqlite";
import sqlite3 from "sqlite3";

export default async function openDB() {
	return open({
		filename: "./src/database/database.db",
		driver: sqlite3.Database,
	});
}
