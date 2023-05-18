import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { PainelModel } from '../componentes/painel/painel.model';
PainelModel
Observable

@Injectable({
  providedIn: 'root'
})
export class ServillesService {
  private url: string = "http://localhost:3000/noticias/"

  constructor(private http: HttpClient) { }
  
  listarAlunos(): Observable<any>{
    return this.http.get(`${this.url}`)
  }
  cadastrar(noticia: PainelModel): Observable<any>{
      return this.http.post(`${this.url}`, noticia)  
    }
  atualizar(id: any, noticia: PainelModel): Observable<any>{
      return this.http.put(`${this.url}`.concat(id), noticia)
  }
  deletar(id: any){
      return this.http.delete(`${this.url}`.concat(id))
  }
}
