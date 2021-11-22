export interface RecursoInterface {
  result: {
    _id: string;
    Nome?: string;
    Emprestado?: boolean;
    Id_ultimo_usuario?: number;
    Descricao?: string;
    type_resource: string;
  }
}
