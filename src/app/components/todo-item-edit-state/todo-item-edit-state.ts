import {Component, EventEmitter, inject, Input, input, Output, output, Signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TodoModel} from '../../models/todoModel';
import {TodoService} from '../../services/todo-service';
import {UserService} from '../../services/user-service';
import {resolve} from '@angular/compiler-cli';
import {switchMap} from 'rxjs';

@Component({
  selector: 'app-todo-item-edit-state',
  imports: [
    FormsModule
  ],
  templateUrl: './todo-item-edit-state.html',
  standalone: true,
  styleUrl: './todo-item-edit-state.scss'
})
export class TodoItemEditState {

  @Input() taskId!: string | null;
  @Output() editState = new EventEmitter<boolean>()
  todoService = inject(TodoService)
  userService = inject(UserService)
  taskTitle = ''
  taskDescription = ''
  currentUsername = localStorage.getItem('currentUsername')
  userId = ''
  requestedTaskId = ''

  exitEditState() {
    this.editState.emit(false)
    location.reload()
  }

  updateOrAdd() {
    if (this.taskId !== "") {
      console.log(this.taskId)
      console.log(this.taskTitle)
      console.log(this.taskDescription)
      this.todoService.updateTask(this.taskId,
        this.taskTitle,
        this.taskDescription,
        true).subscribe(() => {
        this.exitEditState()
        location.reload()
      })

    } else {
      this.userService.getUserByUsername(this.currentUsername)
        .pipe(
          switchMap(userId => {
            const todo: TodoModel = {
              id: null,
              userId: userId,
              title: this.taskTitle,
              description: this.taskDescription,
              finished: false,
              createdAt: null,
              updatedAt: null
            };
            return this.todoService.createTask(todo);
          }),
          switchMap(taskId => {
            return this.todoService.addTaskToUser(taskId);
          })
        )
        .subscribe(() => {
          this.exitEditState();
          location.reload();
        });
    }
  }
}

