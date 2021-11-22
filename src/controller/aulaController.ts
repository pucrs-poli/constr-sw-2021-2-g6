import axios from 'axios';
import express from 'express';
import { AulaInterface } from '../interface/aula';

import AulaModel, { AulaDocument } from '../models/aula';

const AulaRoute = express.Router();

AulaRoute.post('/', async (req, res) => {
  const input: Object = req.body;

  try {
    if (input.hasOwnProperty('reserva') && input['reserva'] != "") {
      const has = await axios.get(`http://localhost:3000/api/v1/reserva/${input['reserva']}`)

      if (has.data == null) {
        throw new Error("Essa reserva não existe");
      }
    }

    const aula: AulaDocument = await (await AulaModel.create(input)).populate('reserva');

    res.status(201).json(aula);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

AulaRoute.delete('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const aulaDeletada = await AulaModel.findByIdAndDelete({ _id: id }).populate('reserva');

    res.json(aulaDeletada).status(204);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

AulaRoute.put('/:id', async (req, res) => {
  const id = req.params.id;
  const input: AulaInterface = req.body;

  try {
    const aulaUpdated = await AulaModel.findByIdAndUpdate(
      id,
      input,
      { new: true },
    ).populate('reserva');

    res.json(aulaUpdated).status(204);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

AulaRoute.patch('/:id', async (req, res) => {
  const id = req.params.id;
  const input: AulaInterface = req.body;

  try {
    const aulaUpdated = await AulaModel.findByIdAndUpdate(
      id,
      input,
      { new: true },
    ).populate('reserva');

    res.json(aulaUpdated).status(204);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

AulaRoute.get('/all', async (_req, res) => {
  try {
    const aulas = await AulaModel.find().populate('reserva');

    res.status(200).json(aulas);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

AulaRoute.get('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const aula = await AulaModel.findById(id).populate('reserva');

    res.status(200).json(aula);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

AulaRoute.get('/', async (req, res) => {
  const input = req.query;

  try {
    const aula = await AulaModel.findOne(input).populate('reserva');

    res.status(200).json(aula);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

export default AulaRoute;
