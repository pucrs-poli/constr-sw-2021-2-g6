import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

import connect from '../config/mongoConfig';
import { ENVIROMENT } from "../config/enviroment";
import AulaRoute from './controller/aulaController';
import ReservaRoute from './controller/reservaController';

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/api/v1/aula', AulaRoute);
app.use('/api/v1/reserva', ReservaRoute);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(ENVIROMENT.PORT, async () => {
  console.log(`Server running on port ${ENVIROMENT.PORT}`);

  await connect();
});
