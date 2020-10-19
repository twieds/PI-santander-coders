import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { HeaderFiltroComponent } from './header-filtro/header-filtro.component';
import { DevSignUpComponent } from './dev/dev-signup/dev-signup.component';
import { DevDetailComponent } from './dev/dev-list/dev-detail/dev-detail.component';
import { DevListComponent } from './dev/dev-list/dev-list.component';
import { NgoSignUpComponent } from './ngo/ngo-signup/ngo-signup.component';
import { ProjectEntryComponent } from './project/project-entry/project-entry.component';
import { ProjectDetailComponent } from './project/project-list/project-detail/project-detail.component';
import { ProjectListComponent } from './project/project-list/project-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DevSignUpComponent,
    CadastroComponent,
    ProjectEntryComponent,
    NgoSignUpComponent,
    HomeComponent,
    DevDetailComponent,
    ProjectDetailComponent,
    DevListComponent,
    ProjectListComponent,
    HeaderFiltroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
