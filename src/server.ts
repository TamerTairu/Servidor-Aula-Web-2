import dotenv from "dotenv";
dotenv.config({
	path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env",
});

import Express from "express";
import roteadorStatic from "./routes/StaticRoutes";
import roteadorAlunos from "./routes/AlunosRoutes";
import { promises } from "dns";

const port: string | undefined = process.env.PORT;
const app = Express();

app.use(Express.json());
app.use("/public", Express.static(`${__dirname}/public`));

app.use(roteadorAlunos);
app.use(roteadorStatic);

app.listen(port, function () {
	console.log(`Servidor funcionando na porta ${port}`);
	console.log(`Acesse: http://localhost:${port}/`);
});
