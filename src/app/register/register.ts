import {Component, inject, OnInit, signal} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserModel} from '../models/userModel';
import {Observable} from 'rxjs';
import {TodoModel} from '../models/todoModel';
import {UserService} from '../services/user-service';
import {RouterLink, RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';



@Component({
  selector: 'app-register',
  imports: [
    RouterOutlet,
    RouterLink,
    FormsModule
  ],
  templateUrl: './register.html',
  standalone: true,
  styleUrl: './register.scss'
})
export class Register{
  userService = inject(UserService)
  users = <Array<UserModel>>([])

  usernameValue = ''
  emailValue =''
  passwordValue =''
  registerNewUser(){
   let user = {
      username: this.usernameValue,
      email: this.emailValue,
      password: this.passwordValue,
      tasks: Array<TodoModel>()
    }
    this.userService.addNewUser(user)
        .subscribe({next: (user)=>{
          this.users.push(user);
          alert('Success')
          },error:(err) =>{
          alert(err.message)
          console.log(err)
          }
        })
  }

}
