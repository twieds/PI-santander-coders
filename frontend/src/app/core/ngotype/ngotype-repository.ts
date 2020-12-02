import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BaseHttpService } from '../services/http/base-http.service';
import { NgoTypeEntity } from './ngotype-entity';
import { NgoTypeMapper } from './ngotype-mapper';
import { NgoTypeModel } from './ngotype-model';

@Injectable({
    providedIn: 'root',
})
export class NgoTypeRepository {

    private readonly API = `${environment.API}/ongType`

    mapper = new NgoTypeMapper();

    constructor(public http: BaseHttpService) { }

    getAllNgos(): Observable<NgoTypeModel> {
        return this.http
            .getAll<NgoTypeEntity[]>(`${this.API}`)
            .pipe(mergeMap((x) => x.data))
            .pipe(map((x) => this.mapper.mapFrom(x)));
    }

    getNgosById(id: number): Observable<NgoTypeModel> {
        return this.http
            .getAll<NgoTypeModel>(`${this.API}/${id}`)
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }
}