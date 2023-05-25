import { Router } from "express";
import { CreateCategory } from "../../Controllers/categoriesController/CreateCategory";

const CategoryRoutes = Router();
// Instanciar os controlladores

const createCategory = new CreateCategory();

CategoryRoutes.post("/", createCategory.handle);

export { CategoryRoutes };
