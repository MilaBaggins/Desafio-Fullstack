import { Router } from "express";
import { createTokenController } from "../controllers/login.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";

const loginRoutes: Router = Router();

loginRoutes.post("", createTokenController), console.log(" login");

export default loginRoutes;
