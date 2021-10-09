import KeycloakAdminClient from "keycloak-admin";

import { ENVIROMENT } from './enviroment';

const kcAdminClient = new KeycloakAdminClient();

kcAdminClient.setConfig({
  baseUrl: `${ENVIROMENT.KEYCLOAK_BASE_URL}`,
  realmName: `${ENVIROMENT.KEYCLOAK_REALM}`,
});

export default kcAdminClient;
