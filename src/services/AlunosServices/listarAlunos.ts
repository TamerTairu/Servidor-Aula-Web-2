import { Aluno } from "../../controllers/AlunosController";
import { getAll } from "../execQuery";

export default async function listarAlunos(): Promise<Aluno[] | undefined> {
	try {
		const result: Aluno[] | undefined = await getAll("SELECT * FROM alunos");
		return result;
	} catch (error) {
		console.log(error);
	}
}
