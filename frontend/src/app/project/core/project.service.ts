import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap, take } from 'rxjs/operators';
import { BaseHttpService } from 'src/app/core/services/http/base-http.service';
import { environment } from 'src/environments/environment';
import { ProjectEntity } from './project-entity';
import { ProjectMapper } from './project-mapper';
import { ProjectModel } from './project-model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly API = `${environment.API}/project`
  mapper = new ProjectMapper();
  
  constructor(private http: HttpClient, private httpBase: BaseHttpService) { }

  list() {
    return this.http.get<ProjectModel[]>(this.API).pipe();
  }

  create(project) {
    return this.http.post(this.API, project).pipe(take(1));
  }

  getProjectByID(id: number): Observable<ProjectModel> {
    return this.httpBase
        .getAll<ProjectModel>(`${this.API}/${id}`)
        .pipe(map((x) => this.mapper.mapFrom(x.data)));
  }
}
