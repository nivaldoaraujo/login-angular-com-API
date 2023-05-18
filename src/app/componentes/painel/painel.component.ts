import { Component, OnInit } from '@angular/core';
import { ServillesService } from 'src/app/service/servilles.service';
import { PainelModel } from './painel.model';
ServillesService
PainelModel

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit{
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
  cadastrar(){
    console.log(this.painel)
    this.servillesService.cadastrar(this.painel).subscribe(painel =>{
      this.painel = new PainelModel()
      this.listarAluno()
    }, err =>{
      console.log("Erro ao cadastrar Noticias", err)
    })
  }
  atualizar(id: number){
    this.servillesService.atualizar(id, this.painel).subscribe(painel =>{
      this.painel = new PainelModel()
      this.listarAluno()
    }, err =>{
      console.log("Erro ao Atualiazar Noticias", err)
    })
  }
  deletar(id: number){
    this.servillesService.deletar(id).subscribe(noticia =>{
      this.painel = new PainelModel()
      this.listarAluno()
    }, err => {
      console.log("Erro ao excluir Noticias", err)
    })
  }
}
