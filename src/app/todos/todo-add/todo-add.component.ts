import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms'

/* NGRX */
import { Store } from '@ngrx/store';
import { NgRx } from '../interfaces/ngRx';
import { Todo } from '../interfaces/todo.interface';

/* ACTIONS */
import * as actions from '../todo.actions';

@Component({
    selector: 'app-todo-add',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './todo-add.component.html',
    styleUrl: './todo-add.component.css'
})
export class TodoAddComponent {

    inputText!: FormControl

    constructor(private Store: Store<NgRx>) {
        this.inputText = new FormControl('', Validators.required)
    }

    crearTodo() {
        if (!this.inputText.valid) {
            return
        }

        this.Store.dispatch(actions.crearTodo({ texto: this.inputText.value }))
        this.inputText.reset()
    }
}
