import "express-async-errors";

import express, { Request, Response, NextFunction } from "express";
import { AppError } from "../Errors/AppErros";

import dotenv from "dotenv";
import { routes } from "../routes";
dotenv.config();

const app = express();

app.use(express.json());
app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: `Internal error - ${err.message}`,
    });
  }
);

export default app;
