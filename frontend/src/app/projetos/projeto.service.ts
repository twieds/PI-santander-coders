import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ProjetoModel } from './projetos-model';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  private readonly API = `${environment.API}project`

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<ProjetoModel[]>(this.API).pipe();
  }

  create(project) {
    return this.http.post(this.API, project).pipe(take(1));
  }
}
