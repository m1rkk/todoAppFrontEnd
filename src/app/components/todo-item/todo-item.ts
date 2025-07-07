import {Component, inject, input, Input, Signal, signal} from '@angular/core';
import {TodoModel} from '../../models/todoModel';
import {TodoService} from '../../services/todo-service';
import {FormsModule} from '@angular/forms';
import {TodoItemEditState} from '../todo-item-edit-state/todo-item-edit-state';

@Component({
  selector: 'app-todo-item',
  imports: [
    FormsModule,
    TodoItemEditState
  ],
  templateUrl: './todo-item.html',
  standalone: true,
  styleUrl: './todo-item.scss'
})
export class TodoItem {
  todo = input.required<TodoModel>()
  editState = signal<boolean>(false)
  todoService = inject(TodoService)
  taskUpdatedTitle = ''
  taskUpdatedDescription = ''
  enterEditState(){
    this.editState.set(true);
  }
  exitEditState(event:boolean){
    this.editState.set(event);
  }
  deleteTask(taskId:string|null){
    this.todoService.deleteTask(taskId).subscribe()
  }
  // saveUpdatedTask(taskId:string){
  //   console.log(taskId)
  //   console.log(this.taskUpdatedTitle)
  //   console.log(this.taskUpdatedDescription)
  // this.todoService.updateTask(taskId,
  //   this.taskUpdatedTitle,
  //   this.taskUpdatedDescription,
  //   true).subscribe()
  //   this.exitEditState(false)
  //   location.reload()
  // }

  protected readonly signal = signal;
}
