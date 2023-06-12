import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listContactController,
  updateContactController,
} from "../controllers/contact.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import {
  contactSchemaRequest,
  contactSchemaUpdate,
} from "../schemas/contacts.schema";
import ensureIsOwnerMiddleware from "../middlewares/ensureIsOwner.middleware";

const contactRoutes = Router();

contactRoutes.use(ensureAuthMiddleware);

contactRoutes.post(
  "",
  ensureDataIsValidMiddleware(contactSchemaRequest),
  createContactController
);
contactRoutes.get("", listContactController);
contactRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(contactSchemaUpdate),
  updateContactController
);
contactRoutes.delete("/:id", ensureIsOwnerMiddleware, deleteContactController);

export { contactRoutes };
