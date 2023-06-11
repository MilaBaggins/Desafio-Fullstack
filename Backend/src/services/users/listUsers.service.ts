import { Repository } from "typeorm";
import {
  TUsersPagination,
  TUsersResponse,
} from "../../interfaces/users.interface";
import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";

const listUsersService = async (
  page: number | undefined,
  perPage: number | undefined
): Promise<TUsersPagination> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  let users: User[] | undefined;

  const orderBy = "email";
  let orderObj = {};
  if (orderBy === "email") {
    orderObj = {
      email: "desc",
    };
  }

  if (!page || !perPage) {
    users = await userRepository.find({
      relations: {
        /* profileInformation: true, */
      },
      withDeleted: true,
    });
  } else {
    users = await userRepository.find({
      skip: (page - 1) * perPage,
      take: perPage,
      order: orderObj,
      relations: {
        /*  profileInformation: true, */
      },
    });
  }

  // const returnUsers: TUsersResponse = usersSchemaResponse.parse(users)

  return {
    page: page || null,
    perPage: perPage || null,
    data: users,
  };
};

export default listUsersService;
