import { Request, Response } from "express";
import { CreateCategoryService } from "../../Services/categories/CreateCategory";

export class CreateCategory {
  async handle(req: Request, res: Response) {
    const { name, description } = req.body;
    const createCategoryService = new CreateCategoryService();
    const result = await createCategoryService.execute({
      name,
      description,
    });
    return res.status(201).json(result);
  }
}
