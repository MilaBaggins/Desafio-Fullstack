import {
  TUserRequest,
  TUserResponse,
  TUserWithoutId,
} from "../../interfaces/users.interface";
import { User } from "../../entities/user.entity";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { hash } from "bcryptjs";

const createUsersService = async (userData: TUserRequest): Promise<User> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const profileData = userData.profileInformations;
  delete userData.profileInformations;

  userData.password = await hash(userData.password, 10);

  const user: User = userRepository.create(userData);
  await userRepository.save(user);

  return user;
};

export default createUsersService;
