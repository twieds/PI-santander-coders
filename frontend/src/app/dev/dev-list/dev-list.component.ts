import { Component, OnInit, ɵConsole } from '@angular/core';
import { empty, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DevModel } from '../core/dev-model';
import { Title } from '@angular/platform-browser';
import { DevRepository } from '../core/dev-repository';
import { StateRepository } from 'src/app/core/location/state/state-repository';
import { SkillRepository } from 'src/app/core/skill/skill-repository';
import { FormBuilder, FormGroup, SelectMultipleControlValueAccessor } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { SharedService } from 'src/app/core/shared/shared.service';

@Component({
  selector: 'app-dev-list',
  templateUrl: './dev-list.component.html',
  styleUrls: ['./dev-list.component.css']
})
export class DevListComponent implements OnInit {

  form: FormGroup;
  devs: DevModel[] = [];
  states: any[] = [];
  cities: any[] = [];
  skills: any[] = [];

  idNgo: string = '';
  userType: string = '';
  idDev: string = '';

  showDevNavBar: boolean = false;
  showNgoNavBar: boolean = false;
  showVisitorBar: boolean = false; 

  constructor(
    private fb: FormBuilder,
    private repository: DevRepository,
    private stateRepository: StateRepository,
    private skillRepository: SkillRepository,
    private sharedService: SharedService,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.getDevs('');
    this.setTitle();
    this.initializeForm();
    this.initializeStates();
    this.initializeSkills();
    this.navUserType();
  }

  navUserType() {
    this.sharedService._userType.subscribe(userType => this.userType = userType);
    this.sharedService._idDev.subscribe(idDev => this.idDev = idDev);
    this.sharedService._idOng.subscribe(idOng => this.idNgo = idOng);

    if (this.idDev != '' && this.userType.toLowerCase() === 'dev') {
      this.showDevNavBar = true;
    } else if (this.idNgo != '' && this.userType.toLowerCase() === 'ngo') {
      this.showNgoNavBar = true;
    } else {
      this.showVisitorBar = true;
    }
  }

  getDevs(params: string): void {
    this.repository.getAllDevs(params).then(dev => {
      this.devs = dev;
    });
  }

  initializeForm() {
    this.form = this.fb.group({
      selectedState: [''],
      selectedCity: [''],
      selectedPractice: [''],
      selectedSkills: ['']
    })
  }

  filterDevs() {
    let params = new HttpParams()
    const selectedState = this.form.value.selectedState;
    const selectedCity = this.form.value.selectedCity;
    const selectedPractice = this.form.value.selectedPractice;
    const selectedSkills = this.form.value.selectedSkills;

    if (selectedState) {
      params = params.append('state', selectedState.id);
    }

    if (selectedCity) {
      params = params.append('city', selectedCity.id);
    }

    if (selectedPractice) {
      selectedPractice.forEach(skill => {
        params = params.append('devPractice', skill.id);
      });
    } 

    if (selectedSkills) {
      selectedSkills.forEach(skill => {
        params = params.append('devSkills', skill.id);
      });
    }

    this.getDevs(params.toString());
  }

  setTitle() {
    this.titleService.setTitle('Devs disponíveis');
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
