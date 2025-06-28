import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TodoModel} from '../models/todoModel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  http = inject(HttpClient)
  httpOptions  = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  };
  httpOptions2 = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }),
    withCredentials: true
  };

  getAllTasks(){
    const url = `http://localhost:8082/api/secured/tasks`
    return this.http.get<Array<TodoModel>>(url,this.httpOptions);
  }
  getTask(taskId:string): Observable<TodoModel>{
    const url = `http://localhost:8082/api/secured/task/`+taskId
    return this.http.get<TodoModel>(url,this.httpOptions)
  }
  deleteTask(taskId:string){
    const url = `http://localhost:8082/api/secured/`+taskId
    return this.http.delete(url,this.httpOptions)
  }

  addTaskToUser(taskId:string){
    const url = `http://localhost:8082/api/secured/add/`+taskId
    return this.http.post(url,this.httpOptions)
  }
  updateTask(taskId:string, title:string, description:string,completed:boolean){
    const url = `http://localhost:8082/api/secured/update/`+taskId+`?title=`+title+`&description=`+description+`&completed=`+completed
    return this.http.put(url,{},this.httpOptions2)
  }
  createTask(todo: TodoModel){
    const url = `http://localhost:8082/api/secured/saveNewTask`
    return this.http.post(url,todo,this.httpOptions)
  }


  constructor() { }
}
