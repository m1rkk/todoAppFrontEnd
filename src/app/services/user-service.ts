import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserModel} from '../models/userModel';
import {Observable} from 'rxjs';
import {TodoModel} from '../models/todoModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http = inject(HttpClient)
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  httpOptions2 = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  };


  addNewUser(user: UserModel):Observable<UserModel>{
    const url = `http://localhost:8082/api/users/auth/signup`
    return this.http.post<UserModel>(url,user,this.httpOptions)
  }

  getUsersTasksByUsername(username:string|null): Observable<Array<TodoModel>>{
    const url = `http://localhost:8082/api/secured/userTasks/username?username=`+username
    return this.http.get<Array<TodoModel>>(url,this.httpOptions2)
  }

  getUserByUsername(username:string|null):Observable<string>{
    const url = `http://localhost:8082/api/users/auth/userByUsername/` + username
    return this.http.get(url, {
      responseType: 'text' as const
    });
  }

  signIn(username:string,password:string): Observable<string>{
    const url = `http://localhost:8082/api/users/auth/signin`
    const body = {
      username: username,
      password: password
    }
    return this.http.post(url,body,{
      responseType:'text'
    })
  }
  getAllUsers(){
    const url =`http://localhost:8082/api/users/auth`
    return this.http.get<Array<UserModel>>(url)
  }
  constructor() { }
}
