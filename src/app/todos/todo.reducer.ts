import { createReducer, on } from '@ngrx/store';
import { crearTodo } from './todo.actions';
import { Todo } from './interfaces/todo.interface';

export const initialState: Todo[] = [
    new Todo('Hacer los pendientes.')
];

export const todoReducer = createReducer(
    initialState,
    on(crearTodo, (state, props) => [...state, new Todo(props.texto)])
);
