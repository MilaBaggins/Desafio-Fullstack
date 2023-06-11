import { Request, Response } from "express";
import {
  TUserRequest,
  TUserResponse,
  TUsersPagination,
  TUsersResponse,
  TUsersUpdateRequest,
} from "../interfaces/users.interface";
import createUsersService from "../services/users/createUsers.service";
import listUsersService from "../services/users/listUsers.service";
import retrieveUsersService from "../services/users/retrieveUsers.service";
import updateUsersService from "../services/users/updateUsers.service";
import deleteUsersService from "../services/users/deleteUsers.service";

const createUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TUserRequest = req.body;

  const newUser = await createUsersService(userData);

  return res.status(201).json(newUser);
};

const listUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const page: number | undefined = Number(req.query.page);
  const perPage: number | undefined = Number(req.query.perPage);

  const users: TUsersPagination = await listUsersService(page, perPage);
  return res.json(users);
};

const retrieveUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = parseInt(req.params.id);

  const user: TUserResponse = await retrieveUsersService(userId);

  return res.json(user);
};

const updateUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TUsersUpdateRequest = req.body;
  const userId: number = parseInt(req.params.id);

  const newUserData: TUserResponse = await updateUsersService(userData, userId);
  return res.json(newUserData);
};

const deleteUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = parseInt(req.params.id);

  await deleteUsersService(userId);

  return res.status(204).send();
};

export {
  createUsersController,
  listUsersController,
  retrieveUsersController,
  updateUsersController,
  deleteUsersController,
};
