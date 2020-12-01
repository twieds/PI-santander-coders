import { Component, OnInit, Input } from '@angular/core';
import { DevModel } from '../../core/dev-model';

@Component({
  selector: 'app-dev-detail',
  templateUrl: './dev-detail.component.html',
  styleUrls: ['./dev-detail.component.css']
})
export class DevDetailComponent implements OnInit {

  @Input() dev: DevModel;
  practice_skills: string;
  skills: string;

  constructor() { }

  ngOnInit(): void {
    this.initializeSkills(this.dev.dev_practice, this.dev.dev_skills);
  }

  initializeSkills(practice, skills): void{
    let aux = [];
    this.practice_skills = "";
    this.skills = "";

    practice.forEach(element => {
      aux.push(element.description);
    });
    this.practice_skills = aux.join(", ");

    aux = [];
    skills.forEach(element => {
      aux.push(element.description);
    });
    this.skills = aux.join(", ");

  }

}
