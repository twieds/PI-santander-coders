import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { BaseHttpService } from 'src/app/core/services/http/base-http.service';
import { environment } from 'src/environments/environment';
import { DevEntity } from './dev-entity';
import { DevMapper } from './dev-mapper';
import { DevModel } from './dev-model';

@Injectable({
    providedIn: 'root',
})


export class DevRepository {

    private readonly API = `${environment.API}/dev`
    mapper = new DevMapper();

    constructor(public http: BaseHttpService) { }

    getDevById(id: number): Observable<DevModel> {
        return this.http
            .getAll<DevModel>(`${this.API}/${id}`)
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }

    getDevByEmail(email: string): Observable<DevModel> {
        return this.http
            .getAll<DevModel>(`${this.API}/email/${email}`)
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }

    getAllDevs(param: string): Promise<DevModel[]> {
        return this.http
            .getAll<DevEntity[]>(`${this.API}?${param}`)
            .toPromise().then(x => {
                return x.data.map(this.mapper.mapFrom);
            })
    }

    postDev(param: DevModel) {
        return this.http
            .post<DevEntity>(`${this.API}`, this.mapper.mapTo(param))
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }

    putDev(param: DevModel) {
        return this.http
            .put<void>(
                `${this.API}/${param.id}`,
                this.mapper.mapTo(param)
            )
            .pipe(map((x) => x.data));
    }

    deleteDev(id: number): Observable<void> {
        return this.http
            .delete<void>(`${this.API}/${id}`, id)
            .pipe(map((x) => x.data));
    }

}