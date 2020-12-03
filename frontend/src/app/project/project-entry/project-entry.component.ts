import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private repository: ProjectRepository,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.getProject();
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
