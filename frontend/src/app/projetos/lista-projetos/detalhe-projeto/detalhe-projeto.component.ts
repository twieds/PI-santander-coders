import { Component, Input, OnInit } from '@angular/core';
import { ProjetoModel } from '../../projetos-model';

@Component({
  selector: 'app-detalhe-projeto',
  templateUrl: './detalhe-projeto.component.html',
  styleUrls: ['./detalhe-projeto.component.css']
})
export class DetalheProjetoComponent implements OnInit {
  @Input() project: ProjetoModel;
  
  constructor() { }

  ngOnInit(): void {
  }

}
