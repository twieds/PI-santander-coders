import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { empty, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SharedService } from 'src/app/core/shared/shared.service';
import { ProjectModel } from 'src/app/project/core/project-model';
import { ProjectRepository } from 'src/app/project/core/project-repository';
import { NgoRepository } from '../core/ngo-repository';

@Component({
  selector: 'app-ngo-dashboard',
  templateUrl: './ngo-dashboard.component.html',
  styleUrls: ['./ngo-dashboard.component.css']
})
export class NgoDashboardComponent implements OnInit {

  projects: ProjectModel[] = [];

  idOng: string = '';
  userType: string = '';
  idDev: string = '';

  showDevNavBar: boolean = false;
  showNgoNavBar: boolean = false;
  showVisitorBar: boolean = false;

  showProjects: boolean = false;

  constructor(
    private titleService: Title,
    private repository: NgoRepository,
    private projectRepository: ProjectRepository,
    private sharedService: SharedService,
    private router: Router,
    private confirmationService: ConfirmationService

  ) { }

  ngOnInit(): void {
    this.navUserType();

    if (this.isAuthorized()) {
      this.getProjects();

    } else {
      this.router.navigateByUrl('/not-found')
    }
  }

  navUserType() {
    this.sharedService._userType.subscribe(userType => this.userType = userType);
    this.sharedService._idDev.subscribe(idDev => this.idDev = idDev);
    this.sharedService._idOng.subscribe(idOng => this.idOng = idOng);

    if (this.idDev != '' && this.userType.toLowerCase() === 'dev') {
      this.showDevNavBar = true;
    } else if (this.idOng != '' && this.userType.toLowerCase() === 'ngo') {
      this.showNgoNavBar = true;
    } else {
      this.showVisitorBar = true;
    }
    
  }

  isAuthorized() {
    this.sharedService._userType.subscribe(userType => this.userType = userType);
    return (this.userType.toLowerCase() === 'ngo');
  }

  getProjects() {
    let id  = Number(this.idOng);
    this.repository.getOngProjects(id).subscribe(project => {
      this.projects.push(project);
    })

    if (this.projects.length > 0) {
      this.showProjects = true;
    }
  }

  deleteProject = async (id: number) => {
    try {
      const _delete = () => {
        this.projectRepository.deleteProject(id).subscribe();
      }

      const _update = () => {
        _delete();
        this.projects = this.projects.filter(item => item.id !== id);
      }

      await _update();
    } catch (err) {
      console.log(err)
    }
  }

  confirm(event: Event, id: number) {
    this.confirmationService.confirm({
      target: event.target,
      message: 'Tem certeza que deseja excluir?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteProject(id);
      },
      reject: () => {
        //reject action
      }
    });
  }

}
