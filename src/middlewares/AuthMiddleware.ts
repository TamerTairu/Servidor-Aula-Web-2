import { Request, Response, NextFunction } from "express";

const isAutheticated: boolean = true;
const isManager: boolean = false;

export function AuthMiddleware(req: Request, res: Response, Next: NextFunction) {
	if (isAutheticated) {
		Next();
	} else {
		res.status(403).json({ message: "Forbidden" });
	}
}

export function ManagerMiddleware(req: Request, res: Response, Next: NextFunction) {
	if (isManager) {
		Next();
	} else {
		res.status(405).json({ message: "Not Allowed" });
	}
}
