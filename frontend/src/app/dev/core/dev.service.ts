import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DevModel } from './dev-model';
import { map, take, tap } from 'rxjs/operators'
import { BaseHttpService } from 'src/app/core/services/http/base-http.service';
import { Observable } from 'rxjs';
import { DevMapper } from './dev-mapper';

@Injectable({
  providedIn: 'root'
})
export class DevService {

  private readonly API = `${environment.API}dev`
  mapper = new DevMapper();

  constructor(private http: HttpClient, private httpBase: BaseHttpService) { }

  list() {
    return this.http.get<DevModel[]>(this.API).pipe();
  }

  create(dev) {
    return this.http.post(this.API, dev).pipe(take(1));
  }

  getDevByID(id: number): Observable<DevModel> {
    return this.httpBase
        .getAll<DevModel>(`${this.API}/${id}`)
        .pipe(map((x) => this.mapper.mapFrom(x.data)));
  }
}
