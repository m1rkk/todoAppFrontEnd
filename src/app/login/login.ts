import {Component, inject, OnInit} from '@angular/core';
import {UserService} from '../services/user-service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  standalone: true,
  styleUrl: './login.scss'
})
export class Login implements OnInit{
  username = 'mark'
  password = 'io2jr3oiom1kmockw3'
  userService = inject(UserService)
  ngOnInit(): void {
    this.userService.signIn(this.username,this.password)
      .pipe()
      .subscribe(response =>{
      localStorage.setItem('token',response)
    })

  }

}
