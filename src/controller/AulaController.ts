import express from 'express';
import { AulaInterface } from '../interface/Aula';

import AulaModel, { AulaDocument } from '../models/aula';

const AulaRoute = express.Router();

AulaRoute.post('/', async (req, res) => {
  const input: AulaInterface = req.body;

  try {
    const aula: AulaDocument = await AulaModel.create(input);

    res.status(201).json(aula);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

AulaRoute.delete('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    await AulaModel.findByIdAndDelete({ _id: id })

    res.status(204);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

AulaRoute.put('/:id', async (req, res) => {
  const id = req.params.id;
  const input: AulaInterface = req.body;

  try {
    await AulaModel.findByIdAndUpdate(
      id,
      input,
      { new: true },
    );

    res.status(204);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

AulaRoute.patch('/:id', async (req, res) => {
  const id = req.params.id;
  const input: AulaInterface = req.body;

  try {
    await AulaModel.findByIdAndUpdate(
      id,
      input,
      { new: true },
    );

    res.status(204);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

AulaRoute.get('/all', async (_req, res) => {
  try {
    const aulas = await AulaModel.find();

    res.status(200).json(aulas);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

AulaRoute.get('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const aula = await AulaModel.findById(id);

    res.status(200).json(aula);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

AulaRoute.get('/', async (req, res) => {
  const input = req.query;

  try {
    const aula = await AulaModel.findOne(input);

    res.status(200).json(aula);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

export default AulaRoute;
