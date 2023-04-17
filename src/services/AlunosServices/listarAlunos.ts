import { getAll } from "../execQuery";

export default async function listarAlunos() {
	try {
		const result = await getAll("SELECT * FROM alunos");
		return result;
	} catch (error) {
		console.log(error);
	}
}
