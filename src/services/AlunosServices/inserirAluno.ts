import { Aluno } from "../../controllers/AlunosController";
import { execQuery } from "../execQuery";

export default async function inserirAluno(aluno: Aluno) {
	try {
		const result = await execQuery(`INSERT into alunos VALUES ('${aluno.getnome()}')`);
		return result;
	} catch (error) {
		console.log(error);
	}
}
