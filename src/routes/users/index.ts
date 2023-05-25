import { Router } from "express";
import { CreateUserController } from "../../Controllers/usersController/CreateUser";

const UserRoutes = Router();
// Instanciar os controlladores

const createUser = new CreateUserController();

UserRoutes.post("/", createUser.handle);

export { UserRoutes };
