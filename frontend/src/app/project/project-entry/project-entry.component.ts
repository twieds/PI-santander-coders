import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ProjectModel } from '../core/project-model';
import { ProjectService } from '../core/project.service';

@Component({
  selector: 'app-project-entry',
  templateUrl: './project-entry.component.html',
  styleUrls: ['./project-entry.component.css']
})

// TODO: add methods put and delete
export class ProjectEntryComponent implements OnInit {
  project: ProjectModel;

  constructor(
    private route: ActivatedRoute,
    private service: ProjectService,
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

    this.service.getProjectByID(id).subscribe(project => {
      this.project = project;
      this.setTitle(project.title);
    }
    );
  }
}
