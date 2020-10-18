import { Component, OnInit, Input } from '@angular/core';
import { DevModel } from '../../dev-model';

@Component({
  selector: 'app-detalhe-dev',
  templateUrl: './detalhe-dev.component.html',
  styleUrls: ['./detalhe-dev.component.css']
})
export class DetalheDevComponent implements OnInit {

  @Input() dev: DevModel;
  constructor() { }

  ngOnInit(): void {
  }

}
