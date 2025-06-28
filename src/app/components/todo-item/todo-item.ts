import {Component, inject, input, Input, signal} from '@angular/core';
import {TodoModel} from '../../models/todoModel';
import {TodoService} from '../../services/todo-service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  imports: [
    FormsModule
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
  exitEditState(){
    this.editState.set(false);
  }
  saveUpdatedTask(taskId:string){
    console.log(taskId)
    console.log(this.taskUpdatedTitle)
    console.log(this.taskUpdatedDescription)
  this.todoService.updateTask(taskId,
    this.taskUpdatedTitle,
    this.taskUpdatedDescription,
    true).subscribe()
    this.exitEditState()
    location.reload()
  }
  deleteTask(taskId:string){
    this.todoService.deleteTask(taskId).subscribe()

  }
}
