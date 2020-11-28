import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BaseHttpService } from '../services/http/base-http.service';
import { SkillEntity } from './skill-entity';
import { SkillMapper } from './skill-mapper';
import { SkillModel } from './skill-model';

@Injectable({
    providedIn: 'root',
})
export class SkillRepository {

    private readonly API = `${environment.API}/skill`

    mapper = new SkillMapper();

    constructor(public http: BaseHttpService) { }

    getAllSkills(): Observable<SkillModel> {
        return this.http
            .getAll<SkillEntity[]>(`${this.API}`)
            .pipe(mergeMap((x) => x.data))
            .pipe(map((x) => this.mapper.mapFrom(x)));
    }

    getSkillById(id: number): Observable<SkillModel> {
        return this.http
            .getAll<SkillModel>(`${this.API}/${id}`)
            .pipe(map((x) => this.mapper.mapFrom(x.data)));
    }
}