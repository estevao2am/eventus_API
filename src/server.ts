import app from "./config/app";

app.listen(process.env.SERVER_PORT, () => {
  console.log("Server is running in:", process.env.SERVER_PORT);
});
