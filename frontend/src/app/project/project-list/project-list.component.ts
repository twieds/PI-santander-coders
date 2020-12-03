import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { empty, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StateRepository } from 'src/app/core/location/state/state-repository';
import { SkillRepository } from 'src/app/core/skill/skill-repository';
import { ProjectModel } from '../core/project-model';
import { ProjectRepository } from '../core/project-repository';
import { ProjectService } from '../core/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  form: FormGroup;
  projects: ProjectModel[] = [];
  states: any[] = [];
  cities: any[] = [];
  skills: any[] = [];

  constructor(
    private fb: FormBuilder,
    private repository: ProjectRepository,
    private stateRepository: StateRepository,
    private skillRepository: SkillRepository,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.getProjects('');
    this.setTitle();
    this.initializeForm();
    this.initializeStates();
    this.initializeSkills();
  }

  getProjects(params: string): void {
    this.repository.getAllProjects(params).then(project => {
      this.projects = project;
    });
  }

  initializeForm() {
    this.form = this.fb.group({
      selectedState: [''],
      selectedCity: [''],
      selectedSkills: ['']
    })
  }

  filterProjects() {
    let params = new HttpParams()
    const selectedState = this.form.value.selectedState;
    const selectedCity = this.form.value.selectedCity;
    const selectedSkills = this.form.value.selectedSkills;

    if (selectedState) {
      params = params.append('state', selectedState.id);
    }

    if (selectedCity) {
      params = params.append('city', selectedCity.id);
    }

    if (selectedSkills) {
      selectedSkills.forEach(skill => {
        params = params.append('projectSkills', skill.id);
      });
    }

    this.getProjects(params.toString());
  }

  setTitle() {
    this.titleService.setTitle('Projetos disponíveis');
  }

  initializeStates() {
    this.stateRepository.getAllStates().subscribe(response => {
      this.states.push({ label: response.state_name, id: response.id })
    });
  }

  initializeCities() {
    this.cities = [];
    this.states.forEach(state => {
      this.stateRepository.getAllCitiesByState(state.id).subscribe(response => {
        this.cities.push({ label: response.city_name, id: response.id })
      });
    });

  }

  initializeSkills() {
    this.skillRepository.getAllSkills().subscribe(response => {
      this.skills.push({ id: response.id, label: response.description })
    });
  }
}
