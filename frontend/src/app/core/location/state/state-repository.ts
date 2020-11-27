import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BaseHttpService } from '../../services/http/base-http.service';
import { CityEntity } from '../city/city-entity';
import { CityMapper } from '../city/city-mapper';
import { CityModel } from '../city/city-model';
import { StateEntity } from './state-entity';
import { StateMapper } from './state-mapper';
import { StateModel } from './state-model';

@Injectable({
    providedIn: 'root',
})
export class StateRepository {

    private readonly API = `${environment.API}/state`

    mapper = new StateMapper();
    cityMapper = new CityMapper();

    constructor(public http: BaseHttpService) { }

    getAllStates(): Observable<StateModel> {
        return this.http
            .getAll<StateEntity[]>(`${this.API}`)
            .pipe(mergeMap((x) => x.data))
            .pipe(map((x) => this.mapper.mapFrom(x)));
    }

    getAllCitiesByState(id: number): Observable<CityModel> {
        return this.http
            .getAll<CityEntity[]>(`${this.API}/${id}/cities`)
            .pipe(mergeMap((x) => x.data))
            .pipe(map((x) => this.cityMapper.mapFrom(x)));
    }
}