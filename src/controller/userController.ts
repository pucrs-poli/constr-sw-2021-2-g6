import express from 'express';
import userRepresentation from 'keycloak-admin/lib/defs/userRepresentation';
import kcAdminClient from "../../config/keycloakConfig";

const UserRoute = express.Router();

UserRoute.post('/', async (req, res) => {
  let { username, email, firstName, lastName, emailVerified, enabled }: userRepresentation = req.body;

  try {
    await kcAdminClient.users.create({
      username,
      email,
      firstName,
      lastName,
      emailVerified,
      enabled,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }

  res.status(200).send(req.body);
});

UserRoute.get('/', async (_req, res) => {
  let users: userRepresentation[];

  try {
    users = await kcAdminClient.users.find();
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }

  res.send(users);
});

UserRoute.get('/:id', async function (req, res) {
  let user: userRepresentation;

  try {
    user = await kcAdminClient.users.findOne({ id: req.params.id });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }

  res.status(200).send(user);
});

UserRoute.put('/:id', async function (req, res) {
  let { firstName, lastName } = req.body;
  let updatedUser;

  try {
    updatedUser = await kcAdminClient.users.update(
      { id: req.params.id },
      { firstName, lastName }
    );
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
  res.status(200).send(JSON.stringify(updatedUser));
});

UserRoute.patch('/:id', async function (req, res) {
  let credentials: userRepresentation;
  credentials.credentials[0].type = "password";
  credentials.credentials[0].value = req.body.password;
  let id = req.params.id;
  let patchedUser;

  try {
    patchedUser = await kcAdminClient.users.update(
      { id },
      credentials
    );
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }

  res.status(200).send(patchedUser);
});

UserRoute.delete('/:id', async function (req, res) {
  let paramId = req.params.id;

  try {
    await kcAdminClient.users.update(
      { id: paramId },
      { enabled: false },
    );
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }

  res.status(200).send(`${paramId} deletado com sucesso.`);
});

export default UserRoute;
