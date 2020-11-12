import { Component, Input, OnInit } from '@angular/core';
import { NgoModel } from '../../core/ngo-model';

@Component({
  selector: 'app-ngo-detail',
  templateUrl: './ngo-detail.component.html',
  styleUrls: ['./ngo-detail.component.css']
})
export class NgoDetailComponent implements OnInit {

  @Input() ngo: NgoModel;
  constructor() { }

  ngOnInit(): void {
  }

}
