import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgoSignUpComponent } from './ngo/ngo-signup/ngo-signup.component';
import { NgoProfileComponent } from './ngo/ngo-profile/ngo-profile.component';
import { AddProjectComponent } from './project/add-project/add-project.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { DevSignUpComponent } from './dev/dev-signup/dev-signup.component';
import { SuccessSignupComponent } from './dev/success-signup/success-signup.component';
import { DevListComponent } from './dev/dev-list/dev-list.component';
import { ProjectEntryComponent } from './project/project-entry/project-entry.component';
import { DevProfileComponent } from './dev/dev-profile/dev-profile.component';
import { NgoListComponent } from './ngo/ngo-list/ngo-list.component';
import { NotFoundComponent } from './template/not-found/not-found.component';
import { NgoDashboardComponent } from './ngo/ngo-dashboard/ngo-dashboard.component';
import { ProjectAddedSuccessComponent } from './project/project-added-success/project-added-success.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'not-found', component: NotFoundComponent },

  { path: 'dev-list', component: DevListComponent },
  { path: 'dev-signup', component: DevSignUpComponent },
  { path: 'dev-signup/:id', component: DevSignUpComponent },
  { path: 'dev-success',component: SuccessSignupComponent},
  { path: 'dev-profile/:id',component: DevProfileComponent},

  { path: ':id-ong/add-project', component: AddProjectComponent },
  { path: ':id-ong/add-project/:id', component: AddProjectComponent },
  { path: 'project-list', component: ProjectListComponent },
  { path: 'project-entry/:id',component: ProjectEntryComponent},
  { path: 'project-success',component: ProjectAddedSuccessComponent},


  { path: 'ngo-dashboard', component: NgoDashboardComponent },
  { path: 'ngo-signup', component: NgoSignUpComponent },
  { path: 'ngo-signup/:id', component: NgoSignUpComponent },
  { path: 'ngo-list', component: NgoListComponent },
  { path: 'ngo-profile/:id',component: NgoProfileComponent},
  
  
  {path: '', pathMatch: 'full', redirectTo:'/home'}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
