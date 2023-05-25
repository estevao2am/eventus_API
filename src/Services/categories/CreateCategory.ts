import { Category } from "@prisma/client";
import { prisma } from "../../Prisma/Client";
import { CategoryDTO } from "../../DTOS/CategoryDTO";
import { AppError } from "../../Errors/AppErros";

export class CreateCategoryService {
  async execute({ name, description }: CategoryDTO): Promise<Category> {
    // Verify user
    const CategoryAlreadyExists = await prisma.category.findUnique({
      where: { name },
    });

    if (CategoryAlreadyExists) {
      throw new AppError("Category Already Exists!");
    }

    const category = await prisma.category.create({
      data: {
        name,
        description,
      },
    });
    return category;
  }
}
