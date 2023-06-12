import { Request, Response } from "express";
import createContactService from "../services/contacts/createContacts.service";
import listContactsService from "../services/contacts/listContacts.service";
import {
  IContactUpdateRequest,
  IContacts,
  TContactsPagination,
} from "../interfaces/contact.interface";
import updateContactService from "../services/contacts/updateContacts.service";
import retrieveContactsService from "../services/contacts/retrieveContacts.service";
import updateContactsService from "../services/contacts/updateContacts.service";
import { deleteContactService } from "../services/contacts/deleteContacts.service";

const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactData: IContacts = req.body;
  const newContact = await createContactService(contactData);
  return res.status(201).json(newContact);
};

const listContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const page: number | undefined = Number(req.query.page);
  const perPage: number | undefined = Number(req.query.perPage);
  const contacts: TContactsPagination = await listContactsService(
    page,
    perPage
  );
  return res.json(contacts);
};

const retrieveContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId: number = parseInt(req.params.id);
  const contact: IContacts = await retrieveContactsService(contactId);
  return res.json(contact);
};

const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactData: IContactUpdateRequest = req.body;
  const contactId: number = parseInt(req.params.id);
  const newContactsData: IContacts = await updateContactsService(
    contactData,
    contactId
  );
  return res.json(newContactsData);
};

const deleteContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId: number = parseInt(req.params.id);
  await deleteContactService(contactId);
  return res.status(204).send();
};

export {
  createContactController,
  listContactController,
  retrieveContactsController,
  updateContactController,
  deleteContactController,
};
