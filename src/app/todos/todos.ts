import {Component, inject, OnInit, signal} from '@angular/core';
import {TodoService} from '../services/todo-service';
import {TodoModel} from '../models/todoModel';
import {TodoItem} from '../components/todo-item/todo-item';
import {UserModel} from '../models/userModel';
import {UserService} from '../services/user-service';

@Component({
  selector: 'app-todos',
  imports: [
    TodoItem
  ],
  templateUrl: './todos.html',
  standalone: true,
  styleUrl: './todos.scss'
})
export class Todos implements OnInit{
  userService = inject(UserService)
  userTodos = signal<Array<TodoModel>>([])
  currentUsername = localStorage.getItem('currentUsername')
  ngOnInit(): void {
    console.log(this.currentUsername)
    this.userService.getUserByUsername(this.currentUsername)
      .subscribe((response)=>{
        this.userTodos.set(response)
        console.log(this.userTodos)
      })

  }

  protected readonly String = String;
  protected readonly Date = Date;
}
