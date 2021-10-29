import express from "express";

import connect from '../config/mongoConfig';
import { ENVIROMENT } from "../config/enviroment";

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.listen(ENVIROMENT.PORT, async () => {
  console.log(`Server running on port ${ENVIROMENT.PORT}`);

  await connect();
});
