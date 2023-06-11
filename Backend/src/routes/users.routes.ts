import { Router } from "express";
import {
  createUsersController,
  deleteUsersController,
  listUsersController,
  retrieveUsersController,
  updateUsersController,
} from "../controllers/users.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import {
  userSchemaRequest,
  userSchemaUpdateRequest,
} from "../schemas/users.schema";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";

const userRoutes: Router = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSchemaRequest),
  createUsersController
);
userRoutes.get("", listUsersController);
userRoutes.get("/:id", retrieveUsersController);
userRoutes.patch(
  "/:id",
  ensureDataIsValidMiddleware(userSchemaUpdateRequest),
  updateUsersController
);
userRoutes.delete("/:id", ensureTokenIsValidMiddleware, deleteUsersController);

export default userRoutes;
