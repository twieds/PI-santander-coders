import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiSelectModule } from 'primeng/multiselect';
import { TooltipModule } from 'primeng/tooltip';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { DevSignUpComponent } from './dev/dev-signup/dev-signup.component';
import { DevDetailComponent } from './dev/dev-list/dev-detail/dev-detail.component';
import { DevListComponent } from './dev/dev-list/dev-list.component';
import { NgoSignUpComponent } from './ngo/ngo-signup/ngo-signup.component';
import { MessageService, ConfirmationService } from 'primeng/api';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import { ProjectDetailComponent } from './project/project-list/project-detail/project-detail.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { NgoProfileComponent } from './ngo/ngo-profile/ngo-profile.component';
import { AddProjectComponent } from './project/add-project/add-project.component';
import { ProjectEntryComponent } from './project/project-entry/project-entry.component';
import { DevProfileComponent } from './dev/dev-profile/dev-profile.component';
import { NgoListComponent } from './ngo/ngo-list/ngo-list.component';
import { NgoDetailComponent } from './ngo/ngo-list/ngo-detail/ngo-detail.component';
import { HeaderFiltroComponent } from './headers/header-filtro/header-filtro.component';
import { HeaderNavComponent } from './headers/header-nav/header-nav.component';
import { SuccessSignupComponent } from './dev/success-signup/success-signup.component';
import { HeaderNavPrimaryComponent } from './headers/header-nav-primary/header-nav-primary.component';

// import {ConfirmDialogModule} from 'primeng/confirmdialog';
// import {ConfirmationService} from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { FooterComponent } from './template/footer/footer.component';
import { AccordionModule } from 'primeng/accordion';
import { NgoDashboardComponent } from './ngo/ngo-dashboard/ngo-dashboard.component';
import { NotFoundComponent } from './template/not-found/not-found.component';
import { HeaderPrimaryLoggedComponent } from './template/header-primary-logged/header-primary-logged.component';
import { CardModule } from 'primeng/card';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ProjectAddedSuccessComponent } from './project/project-added-success/project-added-success.component';
import { HeaderPrimaryLoggedDevComponent } from './template/header-primary-logged-dev/header-primary-logged-dev.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DevSignUpComponent,
    CadastroComponent,
    AddProjectComponent,
    NgoSignUpComponent,
    HomeComponent,
    DevDetailComponent,
    ProjectDetailComponent,
    DevListComponent,
    ProjectListComponent,
    HeaderFiltroComponent,
    NgoProfileComponent,
    ProjectEntryComponent,
    DevProfileComponent,
    NgoListComponent,
    NgoDetailComponent,
    HeaderNavComponent,
    SuccessSignupComponent,
    HeaderNavPrimaryComponent,
    FooterComponent,
    NgoDashboardComponent,
    NotFoundComponent,
    HeaderPrimaryLoggedComponent,
    ProjectAddedSuccessComponent,
    HeaderPrimaryLoggedDevComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    MultiSelectModule,
    TooltipModule,
    MenubarModule,
    AccordionModule,
    CardModule,
    ScrollPanelModule,
    ConfirmPopupModule
    // ConfirmDialogModule,
    // ConfirmationService
  ],
  providers: [
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
