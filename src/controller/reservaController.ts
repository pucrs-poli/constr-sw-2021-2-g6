import express from 'express';
import { getRecursos, updateRecurso } from '../api/recursos';
import { RecursoInterface } from '../interface/recurso';

import { ReservaInterface } from '../interface/reserva';
import ReservaModel, { ReservaDocument } from '../models/reserva';

const ReservaRoute = express.Router();

ReservaRoute.post('/', async (req, res) => {
  const input: ReservaInterface = req.body;

  try {
    const recurso: RecursoInterface = await getRecursos(`/resource/query/all?used=false`);

    await updateRecurso(recurso.result._id, true);

    const aula: ReservaDocument = await ReservaModel.create(input);

    res.status(201).json(aula);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

ReservaRoute.delete('/:id', async (req, res) => {
  const id = req.params.id;

  const reserva: ReservaInterface = await ReservaModel.findById(id);

  await updateRecurso(reserva.Recurso.result._id, false);

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
