import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NgoModel } from './ngo-model';
import { map, take, tap } from 'rxjs/operators'
import { BaseHttpService } from 'src/app/core/services/http/base-http.service';
import { NgoMapper } from './ngo-mapper';
import { Observable } from 'rxjs';
import { NgoEntity } from './ngo-entity';

@Injectable({
  providedIn: 'root'
})
export class NgoRepository {

  private readonly API = `${environment.API}/ong`
  mapper = new NgoMapper();

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
}
