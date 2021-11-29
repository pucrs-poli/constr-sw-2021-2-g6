import axios from 'axios';
import { omit } from 'lodash';

import { ENVIROMENT } from "../../config/enviroment";

const apiRecursos = axios.create({
  baseURL: `${ENVIROMENT.RECURSO_API_URL}`
});

export async function getRecursos(tipoRecurso: string) {
  try {
    const url = "resource/query/free?startTime=2021-11-23T10:44:32.242Z&endTime=2021-11-23T11:00:32.242Z&resourceTypeName="

    const data = await apiRecursos.get(`${url}${tipoRecurso}`);

    return omit(data.data.result[0], '_id');
  } catch (error) {
    return error;
  }
}

