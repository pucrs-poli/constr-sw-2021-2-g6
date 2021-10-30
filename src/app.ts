import express from "express";

import connect from '../config/mongoConfig';
import { ENVIROMENT } from "../config/enviroment";
import AulaRoute from './controller/AulaController';

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/aula', AulaRoute);

app.listen(ENVIROMENT.PORT, async () => {
  console.log(`Server running on port ${ENVIROMENT.PORT}`);

  await connect();
});
