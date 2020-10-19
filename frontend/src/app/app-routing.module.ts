import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderFiltroComponent } from './header-filtro/header-filtro.component';
import { NgoSignUpComponent } from './ngo/ngo-signup/ngo-signup.component';
import { ProjectEntryComponent } from './project/project-entry/project-entry.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { DevSignUpComponent } from './dev/dev-signup/dev-signup.component';
import { DevListComponent } from './dev/dev-list/dev-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ngo-signup', component: NgoSignUpComponent },
  { path: 'dev-list', component: DevListComponent },
  { path: 'dev-signup', component: DevSignUpComponent },
  { path: 'project-entry', component: ProjectEntryComponent },
  { path: 'project-list', component: ProjectListComponent },
  { path: 'header-filtro',component: HeaderFiltroComponent},
  {path: '', pathMatch: 'full', redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
