import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

import { ENVIROMENT } from "../config/enviroment";
import AuthRoute from "./controller/authController";
import UserRoute from "./controller/userController";

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/auth', AuthRoute);
app.use('/user', UserRoute);

app.listen(`${ENVIROMENT.API_PORT}`);
