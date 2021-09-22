import express from "express";
import kcAdminClient from "../../config/keycloakConfig";

const AuthRoute = express.Router();

AuthRoute.post('/', async (req, res) => {
  let { username, password, grantType, clientId, clientSecret } = req.body;

  try {
    await kcAdminClient.auth({
      username,
      password,
      grantType,
      clientId,
      clientSecret
    });

    console.log("Autenticação concluida com sucesso.")

    res.status(200).send({
      accessToken: kcAdminClient.accessToken,
      refreshToken: kcAdminClient.refreshToken
    })
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

export default AuthRoute;
