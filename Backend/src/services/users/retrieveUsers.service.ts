import { Repository } from "typeorm";
import { TUserResponse } from "../../interfaces/users.interface";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { userSchemaResponse } from "../../schemas/users.schema";
import { AppError } from "../../error";

const retrieveUsersService = async (userId: number): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      /* profileInformation: true, */
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const returnUser: TUserResponse = userSchemaResponse.parse(user);

  return returnUser;
};

export default retrieveUsersService;
