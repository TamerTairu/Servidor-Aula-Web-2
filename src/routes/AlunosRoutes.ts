import { Router } from "express";
import { AuthMiddleware, ManagerMiddleware } from "../middlewares/AuthMiddleware";
import AlunosController, { Aluno } from "../controllers/AlunosController";

const roteadorAlunos = Router();

roteadorAlunos.get("/alunos", AuthMiddleware, ManagerMiddleware, AlunosController.getAlunos);

roteadorAlunos.post("/aluno", AlunosController.inserirAluno);

roteadorAlunos.delete("/aluno", AlunosController.excluirAluno);

export default roteadorAlunos;
