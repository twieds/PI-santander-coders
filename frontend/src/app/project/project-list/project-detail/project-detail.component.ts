import { Component, Input, OnInit } from '@angular/core';
import { ProjectModel } from '../../project-model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  @Input() project: ProjectModel;
  
  constructor() { }

  ngOnInit(): void {
  }

}
