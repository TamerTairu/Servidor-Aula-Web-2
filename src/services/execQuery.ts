import { ExecException } from "child_process";
import openDB from "../database/sqlite";
import { Database, Statement } from "sqlite";

export async function execQuery(query: string) {
	try {
		const db: Database = await openDB();
		const result = await db.exec(query);
		return result;
	} catch (error) {
		console.log(error);
	}
}

export async function getAll(query: string) {
	try {
		const db = await openDB();
		const result = await db.all(query);
		return result;
	} catch (error) {
		console.log(error);
	}
}
