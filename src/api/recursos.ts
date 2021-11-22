import axios from 'axios';

import { ENVIROMENT } from "../../config/enviroment";
import { RecursoInterface } from '../interface/recurso';

const apiRecursos = axios.create({
  baseURL: `${ENVIROMENT.RECURSO_API_URL}`
});

export const getRecursos = async (criteria: string): Promise<RecursoInterface> => {
  try {
    const { data } = await apiRecursos.get(`${criteria}`);
    return <RecursoInterface>data;
  } catch (error) {
    return error;
  }
}

export const updateRecurso = async (id: string, status: boolean) => {
  try {
    await apiRecursos.patch(`/resource/${id}`, {
      used: status
    });
  } catch (error) {
    return error;
  }
}
