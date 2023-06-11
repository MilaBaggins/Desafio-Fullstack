import { Repository } from "typeorm";
import { TLoginRequest } from "../../interfaces/login.interface";
import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createTokenService = async (
  loginData: TLoginRequest
): Promise<string> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      username: loginData.username,
    },
  });

  if (!user) {
    console.log(user);
    throw new AppError("Wrong email/password", 401);
  }
  console.log(user);
  const passwordMatch = await compare(loginData.password, user.password);

  if (!passwordMatch) {
    console.log("service login2");
    throw new AppError("Wrong email/password", 401);
  }

  const token = jwt.sign(
    {
      superuser: user.superuser,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
      subject: String(user.id),
    }
  );

  return token;
};

export default createTokenService;
