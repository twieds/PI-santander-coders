import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { empty, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StateRepository } from 'src/app/core/location/state/state-repository';
import { NgoModel } from '../core/ngo-model';
import { NgoRepository } from '../core/ngo-repository';
import { NgoService } from '../core/ngo.service';

@Component({
  selector: 'app-ngo-list',
  templateUrl: './ngo-list.component.html',
  styleUrls: ['./ngo-list.component.css']
})
export class NgoListComponent implements OnInit {

  form: FormGroup;
  states: any[] = [];
  cities: any[] = [];
  ngoTypes: any[] = [];
  ngos: NgoModel[] = [];

  constructor(
    private fb: FormBuilder,
    private repository: NgoRepository,
    private stateRepository: StateRepository,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.getNGOS('');
    this.setTitle();
    this.initializeForm();
    this.initializeStates();
  }

  setTitle() {
    this.titleService.setTitle('ONGs procurando ajuda');
  }

  initializeForm() {
    this.form = this.fb.group({
      selectedState: [''],
      selectedCity: [''],
      selectedNgoType: ['']
    })
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
  
  initializeNgoTypes() {
    // this.skillRepository.getAllSkills().subscribe(response => {
    //   this.skills.push({ id: response.id, label: response.description })
    // });
  }

  getNGOS(params: string): void {
    this.repository.getAllNgos(params).then(ngo => {
      this.ngos = ngo;
    });
  }

  filterNgos() {
    let params = new HttpParams()
    const selectedState = this.form.value.selectedState;
    const selectedCity = this.form.value.selectedCity;
    const selectedNgoType = this.form.value.selectedNgoType;

    if (selectedState) {
      params = params.append('state', selectedState.id);
    }

    if (selectedCity) {
      params = params.append('city', selectedCity.id);
    }

    if (selectedNgoType) {
      params = params.append('ngoType', selectedNgoType.id);
    }

    // this.getNGOS(params.toString());
    this.getNGOS('');
  }


}
