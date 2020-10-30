import { Component, OnInit } from '@angular/core';
import { empty, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DevService } from '../core/dev.service';
import { DevModel } from '../core/dev-model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dev-list',
  templateUrl: './dev-list.component.html',
  styleUrls: ['./dev-list.component.css']
})
export class DevListComponent implements OnInit {

  devs$: Observable<DevModel[]>;
  error$ = new Subject<boolean>();

  constructor(
    private service: DevService,
    private titleService: Title
    ) { }

  ngOnInit(): void {
    this.getDevs();
    this.setTitle();    
  }

  getDevs(): void {
    this.devs$ = this.service.list()
    .pipe(
      catchError(error => {
        console.error(error);
        return empty();
      })
    );
  }

  setTitle() {
    this.titleService.setTitle('Devs disponíveis');
  }
}
