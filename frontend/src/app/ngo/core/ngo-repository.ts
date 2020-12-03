import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NgoModel } from './ngo-model';
import { map, mergeMap, take, tap } from 'rxjs/operators'
import { BaseHttpService } from 'src/app/core/services/http/base-http.service';
import { NgoMapper } from './ngo-mapper';
import { Observable } from 'rxjs';
import { NgoEntity } from './ngo-entity';
import { ProjectModel } from 'src/app/project/core/project-model';
import { ProjectEntity } from 'src/app/project/core/project-entity';
import { ProjectMapper } from 'src/app/project/core/project-mapper';

@Injectable({
    providedIn: 'root'
})
export class NgoRepository {

    private readonly API = `${environment.API}/ong`
    mapper = new NgoMapper();
    projectMapper = new ProjectMapper();

    constructor(public http: BaseHttpService) { }

    getNgoById(id: number): Observable<NgoModel> {
        return this.http
            .getAll<NgoModel>(`${this.API}/${id}`)
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }

    getAllNgos(param: string): Promise<NgoModel[]> {
        return this.http
            .getAll<NgoEntity[]>(`${this.API}?${param}`)
            .toPromise().then(x => {
                return x.data.map(this.mapper.mapFrom);
            })
    }

    postNgo(param: NgoModel) {
        return this.http
            .post<NgoEntity>(`${this.API}`, this.mapper.mapTo(param))
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }

    putNgo(param: NgoModel) {
        return this.http
            .put<void>(
                `${this.API}/${param.id}`,
                this.mapper.mapTo(param)
            )
            .pipe(map((x) => x.data));
    }

    deleteNgo(id: number): Observable<void> {
        return this.http
            .delete<void>(`${this.API}/${id}`, id)
            .pipe(map((x) => x.data));
    }

    getOngProjects(id: number): Observable<ProjectModel> {
        return this.http
            .getAll<ProjectEntity[]>(`${this.API}/${id}/projects`)
            .pipe(mergeMap((x) => x.data))
            .pipe(map((x) => this.projectMapper.mapFrom(x)));
    }


}
