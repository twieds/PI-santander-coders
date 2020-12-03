import { Component, Input, OnInit } from '@angular/core';
import { ProjectModel } from '../../core/project-model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  @Input() project: ProjectModel;
  skills: string;

  constructor() { }

  ngOnInit(): void {
    this.initializeSkills(this.project.project_skills);
  }

  initializeSkills(skills): void{
    let aux = [];
    this.skills = "";

    skills.forEach(element => {
      aux.push(element.description);
    });

    this.skills = aux.join(", ");

  }

}
