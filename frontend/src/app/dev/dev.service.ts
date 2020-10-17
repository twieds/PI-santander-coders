import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DevModel } from './model/dev-model';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DevService {

  private readonly API = `${environment.API}dev`

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<DevModel[]>(this.API);
  }
}
