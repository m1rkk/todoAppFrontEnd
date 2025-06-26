import {Component, input, Input} from '@angular/core';
import {TodoModel} from '../../models/todoModel';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.html',
  standalone: true,
  styleUrl: './todo-item.scss'
})
export class TodoItem {
  todo = input.required<TodoModel>()
}
