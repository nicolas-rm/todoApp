import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { Store } from '@ngrx/store';
import { NgRx } from '../interfaces/ngRx';
import { Todo } from '../interfaces/todo.interface';

@Component({
    selector: 'app-todo-list',
    standalone: true,
    imports: [CommonModule, TodoItemComponent],
    templateUrl: './todo-list.component.html',
    styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {

    todos: Todo[] = []

    constructor(private Store: Store<NgRx>) {
        this.Store.select('todos').subscribe(todos => this.todos = todos)
    }

    ngOnInit(): void {
    }

}
