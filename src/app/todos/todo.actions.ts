import { createAction, props } from '@ngrx/store';

export const crearTodo = createAction(
    '[Todo] Crear Todo',
    props<{ texto: string }>()
);
