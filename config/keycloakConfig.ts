import KeycloakAdminClient from "keycloak-admin";
import * as dotenv from "dotenv";

dotenv.config();

const kcAdminClient = new KeycloakAdminClient();

kcAdminClient.setConfig({
  baseUrl: `${process.env.BASE_URL}`,
  realmName: `${process.env.REALM_NAME}`,
});

export default kcAdminClient;
