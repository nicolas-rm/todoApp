import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

/* NGRX */
import { provideStore, RootStoreConfig } from '@ngrx/store';
import { todoReducer } from './todos/todo.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideClientHydration(),
        provideStore(
            { todos: todoReducer }
        ),
        provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode(), serialize: { immutable: false } })
    ]
};
