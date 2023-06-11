import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm"; /* 
import { Post } from "../entities/post.entity"; */
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

const ensureIsOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  /*   const postRepository: Repository<Post> = AppDataSource.getRepository(Post); */

  const postId: number = parseInt(req.params.id);
  const userId: number = parseInt(res.locals.userId);

  /*   const post: Post null = await postRepository.findOne({
    where: {
      id: postId,
    },
    relations: {
      user: true,
    },
  });

  if (!post) {
    throw new AppError("Post not found", 404);
  }
 */
  /*   if (post.user.id !== userId) {
    throw new AppError("You don`t have permission", 403);
  }

  return next(); */
};

export default ensureIsOwnerMiddleware;
