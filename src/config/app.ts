import express, { Request, Response, NextFunction } from "express";
import { AppError } from "../Errors/AppErros";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express());

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
