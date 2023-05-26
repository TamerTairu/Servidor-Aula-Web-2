import { Request, Response } from "express";
import deletarAluno from "../services/AlunosServices/deletarAluno";
import listarAlunos from "../services/AlunosServices/listarAlunos";
import inserirAluno from "../services/AlunosServices/inserirAluno";

class AlunosController {
	constructor() {}

	async getAlunos(req: Request, res: Response) {
		const alunos: Aluno[] | undefined = await listarAlunos();
		console.log(alunos);
		res.end(JSON.stringify(alunos));
	}

	async inserirAluno(req: Request, res: Response) {
		const aluno: Aluno = req.body;
		console.log(aluno.getnome());
		const alunoInserido = await inserirAluno(aluno);
		res.end(JSON.stringify(alunoInserido));
	}

	async excluirAluno(req: Request, res: Response) {
		const aluno: Aluno = req.body;
		const alunoExcluido = await deletarAluno(aluno);
		res.end(alunoExcluido);
	}
}

export class Aluno {
	private nome: string;

	constructor(nome: string) {
		this.nome = nome;
	}

	getnome(): string {
		return this.nome;
	}
}

export default new AlunosController();
