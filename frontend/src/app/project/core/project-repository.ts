import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { BaseHttpService } from 'src/app/core/services/http/base-http.service';
import { environment } from 'src/environments/environment';
import { ProjectEntity } from './project-entity';
import { ProjectMapper } from './project-mapper';
import { ProjectModel } from './project-model';

@Injectable({
    providedIn: 'root',
})


export class ProjectRepository {

    private readonly API = `${environment.API}/project`
    mapper = new ProjectMapper();

    constructor(public http: BaseHttpService) { }

    getProjectById(id: number): Observable<ProjectModel> {
        return this.http
            .getAll<ProjectModel>(`${this.API}/${id}`)
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }

    getAllProjects(param: string): Promise<ProjectModel[]> {
        return this.http
            .getAll<ProjectEntity[]>(`${this.API}?${param}`)
            .toPromise().then(x => {
                return x.data.map(this.mapper.mapFrom);
            })
    }

    postProject(param: ProjectModel) {
        return this.http
            .post<ProjectEntity>(`${this.API}`, this.mapper.mapTo(param))
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }

    putProject(param: ProjectModel) {
        return this.http
            .put<void>(
                `${this.API}/${param.id}`,
                this.mapper.mapTo(param)
            )
            .pipe(map((x) => x.data));
    }

    deleteProject(id: number): Observable<void> {
        return this.http
            .delete<void>(`${this.API}/${id}`, id)
            .pipe(map((x) => x.data));
    }

}