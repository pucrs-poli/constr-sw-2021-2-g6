# constr-sw-2021-2-g6

## Inputs

### Aula

```json
{
  "professor": "string",
  "disciplina": "string",
  "numTurma": "int",
  "reserva": "_idReserva" //Id da reserva. Não é obrigatorio
}
```

### Reserva

```json
{
  "tipoRecurso": "string" //Tipo do recurso da reserva. E.g: mouse, notebook
}
```

## Outputs

### Aula

```json
{
    "professor": "string",
    "disciplina": "string",
    "numTurma": "int",
    "reserva": {
        "_id": "string",
        "Recurso": {
            "name": "string",
            "used": "boolean",
            "description": "string",
            "reservation": [
                [
                    "string",
                    "string"
                ]
            ],
            "type_resource": "string",
            "__v": "int"
        }
    },
    "_id": "string"
}
```

### Reserva
```json
    {
        "_id": "string",
        "Recurso": {
            "name": "string",
            "used": "boolean",
            "description": "string",
            "reservation": [
                [
                    "string",
                    "string"
                ]
            ],
            "type_resource": "string",
            "__v": "int"
        }
    }
```
