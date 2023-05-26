import { Request, Response, Router } from "express";
import BuildPath from "../utils/BuildPath";

const roteadorStatic: Router = Router();

roteadorStatic.get("/", async function (req: Request, res: Response) {
	res.sendFile(`${BuildPath(__dirname)}/views/index.html`);
});

roteadorStatic.get("*", async function (req: Request, res: Response) {
	res.sendFile(`${BuildPath(__dirname)}/views/404.html`);
});

roteadorStatic.post("/mensage", async function (req: Request, res: Response) {
	console.log(req.body);
	res.sendFile(`${BuildPath(__dirname)}/views/index.html`);
});

export default roteadorStatic;
