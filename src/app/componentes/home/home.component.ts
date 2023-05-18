import { Component } from '@angular/core';
import { PainelModel } from '../painel/painel.model';
import { ServillesService } from 'src/app/service/servilles.service';
PainelModel
ServillesService

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  painel: PainelModel = new PainelModel()
  noticias: Array<any> = new Array()

  constructor(private servillesService: ServillesService){}

  ngOnInit(): void {
    this.listarAluno()
  }
  listarAluno(){
    this.servillesService.listarAlunos().subscribe(noticias => {
      this.noticias = noticias
    }, err => {
      console.log("Erro ao listar Noticias", err)
    })
  }

}
