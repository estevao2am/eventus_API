import { Router, Request } from "express";
import { CategoryRoutes } from "./category/Index";
import { UserRoutes } from "./users";

const routes = Router();

// Welcome routes
routes.get("/", (Request, Response) => {
  Response.json({ message: "Welcome to Eventus App" });
});

// Vai usar todas as routas /users
routes.use("/category", CategoryRoutes);
routes.use("/user", UserRoutes);

export { routes };
