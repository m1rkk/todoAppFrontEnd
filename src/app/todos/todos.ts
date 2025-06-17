import {Component, inject, OnInit} from '@angular/core';
import {TodoService} from '../services/todo-service';
import {TodoModel} from '../models/todoModel';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  standalone: true,
  styleUrl: './todos.scss'
})
export class Todos implements OnInit{
  todoService = inject(TodoService)
  todos = <Array<TodoModel>>([])
  ngOnInit(): void {
    this.todoService.getTask('684ffaca2f416976ca9a539a').pipe().subscribe(
      todo =>{
        console.log(todo)
      }
    )

  }
}
