import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroDevComponent } from './cadastro-dev/cadastro-dev.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroProjetoComponent } from './cadastro-projeto/cadastro-projeto.component';
import { CadastroEntidadeComponent } from './cadastro-entidade/cadastro-entidade.component';
import { HomeComponent } from './home/home.component';
import { DetalheEntidadeComponent } from './detalhe-entidade/detalhe-entidade.component';
import { DetalheDevComponent } from './detalhe-dev/detalhe-dev.component';
import { DetalheProjetoComponent } from './detalhe-projeto/detalhe-projeto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroDevComponent,
    CadastroComponent,
    CadastroProjetoComponent,
    CadastroEntidadeComponent,
    HomeComponent,
    DetalheEntidadeComponent,
    DetalheDevComponent,
    DetalheProjetoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
