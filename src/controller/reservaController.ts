import express from 'express';

import { getRecursos } from '../api/recursos';
import { ReservaInterface } from '../interface/reserva';
import ReservaModel from '../models/reserva';

const ReservaRoute = express.Router();

ReservaRoute.post('/', async (req, res) => {
  const input = req.body.TipoRecurso;

  try {
    const recurso: ReservaInterface = await getRecursos(input);

    const reservaCriada = await ReservaModel.create({ Recurso: recurso });

    res.json(reservaCriada).status(201);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
});

ReservaRoute.delete('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const aulaDeletada = await ReservaModel.findByIdAndDelete({ _id: id })

    res.json(aulaDeletada).status(204);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

ReservaRoute.put('/:id', async (req, res) => {
  const id = req.params.id;
  const input: ReservaInterface = req.body;

  try {
    const reservaUpdated = await ReservaModel.findByIdAndUpdate(
      id,
      input,
      { new: true },
    );

    res.json(reservaUpdated).status(204);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

ReservaRoute.patch('/:id', async (req, res) => {
  const id = req.params.id;
  const input: ReservaInterface = req.body;

  try {
    const reservaUpdated = await ReservaModel.findByIdAndUpdate(
      id,
      input,
      { new: true },
    );

    res.json(reservaUpdated).status(204);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

ReservaRoute.get('/all', async (_req, res) => {
  try {
    const reservas = await ReservaModel.find();

    res.status(200).json(reservas);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

ReservaRoute.get('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const reserva = await ReservaModel.findById(id);

    res.status(200).json(reserva);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

ReservaRoute.get('/', async (req, res) => {
  const input = req.query;

  try {
    const reserva = await ReservaModel.findOne(input);

    res.status(200).json(reserva);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

export default ReservaRoute;
