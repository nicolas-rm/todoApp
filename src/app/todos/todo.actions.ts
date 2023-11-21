import { createAction, props } from '@ngrx/store';

/* Crear Todo */
export const crearTodo = createAction(
    '[Todo] Crear Todo',
    props<{ texto: string }>()
);

/* Actualizar Todo: Completado: true */
export const actualizarTodo = createAction(
    '[Todo] Actualizar Todo',
    props<{ id: string }>()
);

/* EditarTodo Todo: Completado: true */
export const editarTodo = createAction(
    '[Todo] EditarTodo Todo',
    props<{ id: string, texto: string }>()
);
