import mongoose from "mongoose";

import { ENVIROMENT } from './enviroment';

async function connect() {
  try {
    await mongoose.connect(ENVIROMENT.MONGODB_URI);

    console.log(`Mongodb Connected`)
  } catch (error) {
    console.log(`Não foi possivel conectar ao Mongo: ${error}`)
    process.exit(1);
  }
}

export default connect;
