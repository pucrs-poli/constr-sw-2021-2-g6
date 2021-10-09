import express from "express";

import { ENVIROMENT } from "../config/enviroment";
import AuthRoute from "./controller/authController";
import UserRoute from "./controller/userController";

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/auth', AuthRoute);
app.use('/user', UserRoute);

app.listen(`${ENVIROMENT.API_PORT}`);
