import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { PainelComponent } from './componentes/painel/painel.component';
//add nos providers

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//não esquecer de add ,eles nos imports e provider
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServillesService } from './service/servilles.service';
import { AuthService } from './componentes/login/auth.service';
import { HomeComponent } from './componentes/home/home.component';
HttpClient
HttpClientModule
ServillesService

AuthService
FormsModule

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PainelComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [AuthService, ServillesService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
