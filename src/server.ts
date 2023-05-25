import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express());

app.listen(process.env.SERVER_PORT, () => {
  console.log("Server is running in:", process.env.SERVER_PORT);
});
