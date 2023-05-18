import { Injectable } from '@angular/core';
import { usuario } from './usuario';
import { Router } from '@angular/router';
Router

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false
  
  constructor(private router: Router) { }
  fazerLogin(usuario: usuario){
    if(usuario.nome === 'adm@senac.com' && usuario.senha === '123456')
    {
      this.usuarioAutenticado  = true
      //direcionar para página
      alert('Bem vindo!! Você será direcionado para o painel de controle.')
      this.router.navigate(['painel'])
    }else{
      this.usuarioAutenticado = false
      alert("Login e senha inválidos, digite novamente!")
    }
  }
}
