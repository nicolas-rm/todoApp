import { v4 as uuid } from 'uuid'

export class Todo {

    public id: string
    public texto: string
    public completado: boolean

    constructor(texto: string) {
        this.texto = texto
        this.id = uuid().toString()
        this.completado = false
    }

}
