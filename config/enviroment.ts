import * as dotenv from 'dotenv';

dotenv.config();

export const ENVIROMENT = {
  KEYCLOAK_BASE_URL: process.env.BASE_URL,
  KEYCLOAK_REALM: process.env.REALM_NAME,
  API_PORT: process.env.PORT,
}
