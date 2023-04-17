import { Aluno } from "../../controllers/AlunosController";
import { execQuery } from "../execQuery";

export default async function deletarAluno(aluno: Aluno) {
	try {
		const result = await execQuery(`DELETE FROM alunos WHERE alunos.nome = '${aluno.getnome()}'`);
		return result;
	} catch (error) {
		console.error(error);
	}
}
