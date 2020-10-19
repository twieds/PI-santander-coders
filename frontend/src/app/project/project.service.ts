import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ProjectModel } from './project-model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly API = `${environment.API}project`

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<ProjectModel[]>(this.API).pipe();
  }

  create(project) {
    return this.http.post(this.API, project).pipe(take(1));
  }
}
