import { Component, OnInit } from '@angular/core';
import { empty, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DevService } from '../dev.service';
import { DevModel } from '../dev-model';

@Component({
  selector: 'app-dev-list',
  templateUrl: './dev-list.component.html',
  styleUrls: ['./dev-list.component.css']
})
export class DevListComponent implements OnInit {

  devs$: Observable<DevModel[]>;
  error$ = new Subject<boolean>();

  constructor(private service: DevService) { }

  ngOnInit(): void {

    this.devs$ = this.service.list()
    .pipe(
      catchError(error => {
        console.error(error);
        return empty();
      })
    );
  }

}
