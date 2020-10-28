import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NgoModel } from './ngo-model';
import { map, take, tap } from 'rxjs/operators'
import { BaseHttpService } from 'src/app/core/services/http/base-http.service';
import { NgoMapper } from './ngo-mapper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgoService {

  private readonly API = `${environment.API}ong`
  mapper = new NgoMapper();

  constructor(private http: HttpClient, private httpBase: BaseHttpService) { }

  list() {
    return this.http.get<NgoModel[]>(this.API).pipe();
  }

  create(ngo) {
    return this.http.post(this.API, ngo).pipe(take(1));
  }

  getNgoByID(id: number): Observable<NgoModel> {
    return this.httpBase
        .getAll<NgoModel>(`${this.API}/${id}`)
        .pipe(map((x) => this.mapper.mapFrom(x.data)));
  }
}
