import mongoose from 'mongoose';

import { ReservaInterface } from '../interface/reserva';

export interface ReservaDocument extends ReservaInterface, mongoose.Document {
  _id: mongoose.ObjectId,
};

const ReservaShcema = new mongoose.Schema({
  nome: { type: String, required: true },
}, {
  versionKey: false
});

const ReservaModel = mongoose.model<ReservaDocument>('Reserva', ReservaShcema);

export default ReservaModel;
