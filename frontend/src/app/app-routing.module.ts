import { CadastroProjetoComponent } from './cadastro-projeto/cadastro-projeto.component';
import { CadastroDevComponent } from './cadastro-dev/cadastro-dev.component';
import { CadastroEntidadeComponent } from './cadastro-entidade/cadastro-entidade.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro-entidade', component: CadastroEntidadeComponent },
  { path: 'cadastro-dev', component: CadastroDevComponent },
  { path: 'cadastro-projeto', component: CadastroProjetoComponent },
  {path: '', pathMatch: 'full', redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
