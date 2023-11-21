import { CommonModule } from '@angular/common';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';


import { Store } from '@ngrx/store';
import { NgRx } from '../interfaces/ngRx';
import { Todo } from '../interfaces/todo.interface';
import { actualizarTodo, editarTodo } from '../todo.actions';

@Component({
    selector: 'app-todo-item',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './todo-item.component.html',
    styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {


    @Input() todo!: Todo
    @ViewChild('inputElement') inputElement!: ElementRef

    checked!: FormControl
    inputText!: FormControl

    editar: boolean = false


    constructor(private Store: Store<NgRx>) {}

    ngOnInit(): void {
        /* ASIGNACION DE DATOS  */
        this.checked = new FormControl(this?.todo?.completado)
        this.inputText = new FormControl(this?.todo?.texto, Validators.required)

        /* VALIDACION Y CONTROL DEL CHECK */
        this.checked.valueChanges.subscribe(change => {
            this.Store.dispatch(actualizarTodo({ id: this.todo.id }))
        })
    }

    editarTodo() {
        /* ACTIVAR EDITAR */
        this.editar = true

        /* Valor Persistente */
        this.inputText.setValue(this.todo.texto)

        setTimeout(() => {
            this?.inputElement?.nativeElement?.focus()
        }, 1);
    }

    terminarEditar() {
        this.editar = false

        if(this.inputText.invalid || this.todo.texto === this.inputText.value){
            return
        }

        this.Store.dispatch(editarTodo({ id: this.todo.id, texto: this.inputText.value }))
    }


}
