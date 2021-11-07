import axios from 'axios';

import { ENVIROMENT } from "../../config/enviroment";

const apiRecursos = axios.create({
  baseURL: `${ENVIROMENT.RECURSO_API_URL}`
});

export const getRecursos = async (criteria: string) => {
  try {
    const { data } = await apiRecursos.get(`/${criteria}`);
    return data;
  } catch (error) {
    return error;
  }
}
