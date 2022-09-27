import express, { Express } from "express";
import routes from "./routes/userRoute";
const app: Express = express();

app.use(express.json());

app.use("/", routes);

app.use((req, res, next) => {
  const err = new Error("Not found");
  res.status(404).json({ message: err.message });
});

app.listen(3000, () => {
  console.log("Server running at port 3000");
});
