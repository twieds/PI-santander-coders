import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/core/shared/shared.service';
import { ProjectModel } from '../core/project-model';
import { ProjectRepository } from '../core/project-repository';
import { ProjectService } from '../core/project.service';

@Component({
  selector: 'app-project-entry',
  templateUrl: './project-entry.component.html',
  styleUrls: ['./project-entry.component.css']
})

// TODO: add methods put and delete
export class ProjectEntryComponent implements OnInit {
  project: ProjectModel;
  project_skills: string;
  skills: string;

  idNgo: string = '';
  userType: string = '';
  idDev: string = '';

  showDevNavBar: boolean = false;
  showNgoNavBar: boolean = false;
  showVisitorBar: boolean = false; 

  constructor(
    private route: ActivatedRoute,
    private repository: ProjectRepository,
    private titleService: Title,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.getProject();
    this.navUserType();
  }

  navUserType() {
    this.sharedService._userType.subscribe(userType => this.userType = userType);
    this.sharedService._idDev.subscribe(idDev => this.idDev = idDev);
    this.sharedService._idOng.subscribe(idOng => this.idNgo = idOng);

    if (this.idDev != '' && this.userType.toLowerCase() === 'dev') {
      this.showDevNavBar = true;
    } else if (this.idNgo != '' && this.userType.toLowerCase() === 'ngo') {
      this.showNgoNavBar = true;
    } else {
      this.showVisitorBar = true;
    }
  }

  setTitle(project) {
    this.titleService.setTitle('Projeto - ' + project);
  } 

  getProject(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.repository.getProjectById(id).subscribe(project => {
      this.project = project;
      this.setTitle(project.title);
      this.initializeSkills(project.project_skills);
    });
  }


  initializeSkills(skills): void{
    let aux = [];

    skills.forEach(element => {
      aux.push(element.description);
    });
    this.skills = aux.join(", ");
  }

  formatDate() {

  }
}
