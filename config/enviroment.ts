import * as dotenv from 'dotenv';

dotenv.config();

export const ENVIROMENT = {
  PORT: process.env.PORT || 3000,
  MONGODB_URI: process.env.MONGODB_URI,
  RECURSO_API_URL: process.env.RECURSO_API_URL,
}
