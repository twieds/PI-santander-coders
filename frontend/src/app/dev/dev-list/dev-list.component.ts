import { Component, OnInit } from '@angular/core';
import { empty, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DevModel } from '../core/dev-model';
import { Title } from '@angular/platform-browser';
import { DevRepository } from '../core/dev-repository';

@Component({
  selector: 'app-dev-list',
  templateUrl: './dev-list.component.html',
  styleUrls: ['./dev-list.component.css']
})
export class DevListComponent implements OnInit {

  devs: DevModel[] = [];
 
  constructor(
    private repository: DevRepository,
    private titleService: Title
    ) { }

  ngOnInit(): void {
    this.getDevs();
    this.setTitle();    
  }

  getDevs(): void {
    this.devs = [];
    this.repository.getAllDevs().then(dev => {
      console.log('entrou');
      console.log(dev);
      this.devs = dev;      
    });  
  }

  setTitle() {
    this.titleService.setTitle('Devs disponíveis');
  }
}
