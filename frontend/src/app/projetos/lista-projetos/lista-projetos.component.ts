import { Component, OnInit } from '@angular/core';
import { empty, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProjetoService } from '../projeto.service';
import { ProjetoModel } from '../projetos-model';

@Component({
  selector: 'app-lista-projetos',
  templateUrl: './lista-projetos.component.html',
  styleUrls: ['./lista-projetos.component.css']
})
export class ListaProjetosComponent implements OnInit {

  projects$: Observable<ProjetoModel[]>;
  error$ = new Subject<boolean>();

  constructor(private service: ProjetoService) { }

  ngOnInit(): void {

    this.projects$ = this.service.list()
    .pipe(
      catchError(error => {
        console.error(error);
        return empty();
      })
    );

  }

}
