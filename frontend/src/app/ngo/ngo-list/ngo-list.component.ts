import { Component, OnInit } from '@angular/core';
import { empty, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NgoModel } from '../core/ngo-model';
import { NgoService } from '../core/ngo.service';

@Component({
  selector: 'app-ngo-list',
  templateUrl: './ngo-list.component.html',
  styleUrls: ['./ngo-list.component.css']
})
export class NgoListComponent implements OnInit {

  ngo$: Observable<NgoModel[]>;
  error$ = new Subject<boolean>();
  constructor(private service: NgoService) { }

  ngOnInit(): void {
    this.ngo$ = this.service.list()
    .pipe(
      catchError(error => {
        console.error(error);
        return empty();
      })
    );
  }

}
