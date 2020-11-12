import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { empty, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProjectModel } from '../core/project-model';
import { ProjectService } from '../core/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects$: Observable<ProjectModel[]>;
  error$ = new Subject<boolean>();

  constructor(
    private service: ProjectService,
    private titleService: Title
    ) { }

  ngOnInit(): void {
    this.setTitle();
    this.getProjects();
  }

  setTitle() {
    this.titleService.setTitle('Projetos disponíveis');
  }

  getProjects(): void {
    this.projects$ = this.service.list()
    .pipe(
      catchError(error => {
        console.error(error);
        return empty();
      })
    );
  }

}
