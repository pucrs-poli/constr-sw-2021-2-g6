import { ReservaInterface } from './reserva';

export interface AulaInterface {
  professor: string,
  disciplina: string,
  numTurma: number,
  reserva?: ReservaInterface
};
