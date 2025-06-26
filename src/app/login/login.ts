import {Component, inject, OnInit} from '@angular/core';
import {UserService} from '../services/user-service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {TodoModel} from '../models/todoModel';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    FormsModule
  ],
  templateUrl: './login.html',
  standalone: true,
  styleUrl: './login.scss'
})
export class Login{
  userService = inject(UserService)
  usernameValue = ''
  passwordValue = ''

  logInUser(){
    this.userService.signIn(this.usernameValue,this.passwordValue)
      .subscribe({next: (response)=>{
          localStorage.setItem('token',response)
          localStorage.setItem('currentUsername',this.usernameValue)
          alert("Success")
        },error:(err)=>{
        alert(err.message);
        }
      })

  }


}
