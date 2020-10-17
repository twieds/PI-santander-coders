import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { HeaderFiltroComponent } from './header-filtro/header-filtro.component';
import { CadastroDevComponent } from './dev/cadastro-dev/cadastro-dev.component';
import { DetalheDevComponent } from './dev/lista-devs/detalhe-dev/detalhe-dev.component';
import { ListaDevsComponent } from './dev/lista-devs/lista-devs.component';
import { CadastroEntidadeComponent } from './entidade/cadastro-entidade/cadastro-entidade.component';
import { CadastroProjetoComponent } from './projetos/cadastro-projeto/cadastro-projeto.component';
import { DetalheProjetoComponent } from './projetos/lista-projetos/detalhe-projeto/detalhe-projeto.component';
import { ListaProjetosComponent } from './projetos/lista-projetos/lista-projetos.component';


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
