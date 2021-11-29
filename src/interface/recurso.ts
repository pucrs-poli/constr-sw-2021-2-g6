export interface RecursoInterface {
  _id: string;
  Name: string;
  Used: boolean;
  Description: string;
  TypeResource: {
    _id: string;
    Name: string;
  }
}
