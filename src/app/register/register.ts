import {Component, inject, OnInit, signal} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserModel} from '../models/userModel';
import {Observable} from 'rxjs';
import {TodoModel} from '../models/todoModel';
import {UserService} from '../services/user-service';



@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.html',
  standalone: true,
  styleUrl: './register.scss'
})
export class Register implements OnInit{
  userService = inject(UserService)
  users = <Array<UserModel>>([])
  user = {
    username: 'mark',
    email: 'mark@gmail.com',
    password: 'io2jr3oiom1kmockw3',
    todos: []
  }

  ngOnInit(): void {
    this.userService.addNewUser(this.user)
      .subscribe(user=>{
        this.users.push(user)
      })
    console.log(this.users)
  }
}
