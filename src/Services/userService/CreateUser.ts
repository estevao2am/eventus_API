import { User } from "@prisma/client";
import { prisma } from "../../Prisma/Client";
import { CreateUser } from "../../DTOS/UserDTO";
import { AppError } from "../../Errors/AppErros";

export class CreateUserService {
  async execute({
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
  }: CreateUser): Promise<User> {
    // Verify user
    const userAlreadyExists = await prisma.user.findUnique({
      where: { email },
    });

    if (userAlreadyExists) {
      throw new AppError("User Already Exists!");
    }

    const CategoryExist = await prisma.category.findFirst({
      where: { id: categoryId },
    });
    if (!CategoryExist) {
      throw new AppError("Category Doesnt exists");
    }

    const user = await prisma.user.create({
      data: {
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
      },
    });
    return user;
  }
}
