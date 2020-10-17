import { Component, OnInit } from '@angular/core';
import { empty, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DevService } from '../dev.service';
import { DevModel } from '../model/dev-model';

@Component({
  selector: 'app-lista-devs',
  templateUrl: './lista-devs.component.html',
  styleUrls: ['./lista-devs.component.css']
})
export class ListaDevsComponent implements OnInit {

  devs$: Observable<DevModel[]>;
  error$ = new Subject<boolean>();

  constructor(private service: DevService) { }

  ngOnInit(): void {
    // this.service.list().subscribe(dados => this.devs = dados);
    
    this.devs$ = this.service.list()
    .pipe(
      catchError(error => {
        console.error(error);
        return empty();
      })
    );
  }

}
