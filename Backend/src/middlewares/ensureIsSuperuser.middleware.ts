import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

const ensureIsSuperuserMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const superuser = res.locals.userPermission;

  if (!superuser) {
    throw new AppError("You don`t have permission", 403);
  }

  return next();
};

export default ensureIsSuperuserMiddleware;
