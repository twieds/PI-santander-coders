import { Component, OnInit } from '@angular/core';
import { empty, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProjectService } from '../project.service';
import { ProjectModel } from '../project-model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects$: Observable<ProjectModel[]>;
  error$ = new Subject<boolean>();

  constructor(private service: ProjectService) { }

  ngOnInit(): void {

    this.projects$ = this.service.list()
    .pipe(
      catchError(error => {
        console.error(error);
        return empty();
      })
    );

  }

}
