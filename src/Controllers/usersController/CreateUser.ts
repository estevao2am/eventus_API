import { Request, Response } from "express";
import { CreateUserService } from "../../Services/userService/CreateUser";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const {
      first_name,
      bio,
      categoryId,
      email,
      password,
      phone,
      profileImage,
      coverUrl,
      second_name,
      username,
    } = req.body;
    const createUserService = new CreateUserService();
    const result = await createUserService.execute({
      first_name,
      bio,
      categoryId,
      email,
      password,
      phone,
      profileImage,
      coverUrl,
      second_name,
      username,
    });
    return res.status(201).json(result);
  }
}
