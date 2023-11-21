import { createReducer, on } from '@ngrx/store';
import { actualizarTodo, crearTodo, editarTodo } from './todo.actions';
import { Todo } from './interfaces/todo.interface';

export const initialState: Todo[] = [
    new Todo('Hacer los pendientes.'),
    new Todo('Ir al mercado.'),
    new Todo('Comprar Verduras.')
];

export const todoReducer = createReducer(
    initialState,
    /* Crear un todo */
    on(crearTodo, (state, props) => [...state, new Todo(props.texto)]),
    /* Actualizar una propiedad del todo: Completado; true */
    on(actualizarTodo, (state, props) => state.map(ls => ls.id === props.id ? ({ ...ls, completado: !ls.completado }) : ls)),
    /* EditarTodo una propiedad del todo: Texto */
    on(editarTodo, (state, props) => state.map(ls => ls.id === props.id ? ({ ...ls, texto: props.texto }) : ls))
)
