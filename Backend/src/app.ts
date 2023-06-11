import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import { handleErros } from "./error";
import userRoutes from "./routes/users.routes";
import cors from "cors";
import loginRoutes from "./routes/login.routes"; /* 
import contactsRoutes from "./routes/contacts.routes"; */
const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/register", userRoutes);
app.use("/login", loginRoutes);
/* app.use("/contacts", contactsRoutes); */

app.use(handleErros);

export default app;
