import {Component, inject, OnInit, signal, ViewChild, ViewContainerRef} from '@angular/core';
import {TodoService} from '../services/todo-service';
import {TodoModel} from '../models/todoModel';
import {TodoItem} from '../components/todo-item/todo-item';
import {UserModel} from '../models/userModel';
import {UserService} from '../services/user-service';
import {TodoItemEditState} from '../components/todo-item-edit-state/todo-item-edit-state';

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
  @ViewChild('todos',{read:ViewContainerRef})todos!:ViewContainerRef;

  userService = inject(UserService)
  userTodos = signal<Array<TodoModel>>([])
  currentUsername = localStorage.getItem('currentUsername')
  ngOnInit(): void {
    console.log(this.currentUsername)
    this.userService.getUsersTasksByUsername(this.currentUsername)
      .subscribe((response)=>{
        this.userTodos.set(response)
        console.log(this.userTodos)
      })

  }
  addTask(){
  const componentRef = this.todos.createComponent(TodoItemEditState);
  componentRef.instance.taskId = ''
  }
  protected readonly String = String;
  protected readonly Date = Date;
}
