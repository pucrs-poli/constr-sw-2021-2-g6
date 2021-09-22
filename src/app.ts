import express from "express";
import * as dotenv from "dotenv";

import AuthRoute from "./controller/authController";
import UserRoute from "./controller/userController";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/auth', AuthRoute);
app.use('/user', UserRoute);

app.listen(`${process.env.PORT}`);
