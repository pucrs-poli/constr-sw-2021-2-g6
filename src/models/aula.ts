import mongoose from 'mongoose';

import { AulaInterface } from '../interface/Aula';

export interface AulaDocument extends AulaInterface, mongoose.Document {
  _id: mongoose.ObjectId,
};

const AulaSchema = new mongoose.Schema({
  professor: { type: String, required: true },
  disciplina: { type: String, required: true },
  numTurma: { type: Number, required: true },
}, {
  versionKey: false
});

const AulaModel = mongoose.model<AulaDocument>('Aula', AulaSchema);

export default AulaModel;
