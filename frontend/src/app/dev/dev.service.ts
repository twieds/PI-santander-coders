import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DevModel } from './dev-model';
import { take, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DevService {

  private readonly API = `${environment.API}dev`

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<DevModel[]>(this.API).pipe();
  }

  create(dev) {
    return this.http.post(this.API, dev).pipe(take(1));
  }
}