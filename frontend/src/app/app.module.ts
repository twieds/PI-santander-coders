import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { ListaDevsComponent } from './lista-devs/lista-devs.component';
import { ListaProjetosComponent } from './lista-projetos/lista-projetos.component';
import { HeaderFiltroComponent } from './header-filtro/header-filtro.component';
import { CadastroDevComponent } from './cadastro-dev/cadastro-dev.component';
import { CadastroProjetoComponent } from './cadastro-projeto/cadastro-projeto.component';
import { CadastroEntidadeComponent } from './cadastro-entidade/cadastro-entidade.component';
import { DetalheDevComponent } from './lista-devs/detalhe-dev/detalhe-dev.component';
import { DetalheProjetoComponent } from './lista-projetos/detalhe-projeto/detalhe-projeto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroDevComponent,
    CadastroComponent,
    CadastroProjetoComponent,
    CadastroEntidadeComponent,
    HomeComponent,
    DetalheDevComponent,
    DetalheProjetoComponent,
    ListaDevsComponent,
    ListaProjetosComponent,
    HeaderFiltroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
