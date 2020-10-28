import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
    private service: ProjectService
  ) { }

  ngOnInit(): void {
    this.getDev();
  }

  getDev(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.service.getProjectByID(id).subscribe(project => this.project = project);
  }
}
