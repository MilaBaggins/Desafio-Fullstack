import { z } from "zod";
import {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  userSchemaWithoutId,
  usersSchemaResponse,
} from "../schemas/users.schema";
import { DeepPartial } from "typeorm";
import { User } from "../entities/user.entity";

type TUserRequest = z.infer<typeof userSchemaRequest>;
type TUserWithoutId = z.infer<typeof userSchemaWithoutId>;
type TUser = z.infer<typeof userSchema>;
type TUserResponse = z.infer<typeof userSchemaResponse>;
type TUsersResponse = z.infer<typeof usersSchemaResponse>;
type TUsersUpdateRequest = DeepPartial<TUserRequest>;

type TUsersPagination = {
  page: number | null | undefined;
  perPage: number | null | undefined;
  data: User[];
};

export {
  TUserRequest,
  TUser,
  TUserResponse,
  TUsersResponse,
  TUsersPagination,
  TUsersUpdateRequest,
  TUserWithoutId,
};
