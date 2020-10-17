import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderFiltroComponent } from './header-filtro/header-filtro.component';
import { CadastroDevComponent } from './dev/cadastro-dev/cadastro-dev.component';
import { ListaDevsComponent } from './dev/lista-devs/lista-devs.component';
import { CadastroEntidadeComponent } from './entidade/cadastro-entidade/cadastro-entidade.component';
import { CadastroProjetoComponent } from './projetos/cadastro-projeto/cadastro-projeto.component';
import { ListaProjetosComponent } from './projetos/lista-projetos/lista-projetos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro-entidade', component: CadastroEntidadeComponent },
  { path: 'cadastro-dev', component: CadastroDevComponent },
  { path: 'cadastro-projeto', component: CadastroProjetoComponent },
  { path: 'lista-devs', component: ListaDevsComponent },
  { path: 'lista-projetos', component: ListaProjetosComponent },
  { path: 'header-filtro',component: HeaderFiltroComponent},
  {path: '', pathMatch: 'full', redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
