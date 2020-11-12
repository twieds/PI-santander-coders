import { Component, OnInit, Input } from '@angular/core';
import { DevModel } from '../../core/dev-model';

@Component({
  selector: 'app-dev-detail',
  templateUrl: './dev-detail.component.html',
  styleUrls: ['./dev-detail.component.css']
})
export class DevDetailComponent implements OnInit {

  @Input() dev: DevModel;
  constructor() { }

  ngOnInit(): void {
  }

}
