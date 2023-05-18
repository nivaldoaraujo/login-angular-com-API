import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { usuario } from './usuario';
import { FormsModule } from '@angular/forms';
AuthService
usuario

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //private usuario = new usuario()
  usuarios: usuario = new usuario()

  constructor(private authService: AuthService){}

  ngOnInit(){

  }
  fazerLogin(){
    console.log(this.usuarios)
    this.authService.fazerLogin(this.usuarios)
  }

  }
  


