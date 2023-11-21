import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFooterComponent } from '../todo-footer/todo-footer.component';
import { TodoAddComponent } from '../todo-add/todo-add.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [CommonModule, TodoFooterComponent, TodoAddComponent, TodoListComponent],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css'
})
export class TodoPageComponent {

}
