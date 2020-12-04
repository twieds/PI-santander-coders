import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { StateRepository } from 'src/app/core/location/state/state-repository';
import { NgoTypeRepository } from 'src/app/core/ngotype/ngotype-repository';
import { SharedService } from 'src/app/core/shared/shared.service';
import { NgoModel } from '../core/ngo-model';
import { NgoRepository } from '../core/ngo-repository';

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

  idNgo: string = '';
  userType: string = '';
  idDev: string = '';

  showDevNavBar: boolean = false;
  showNgoNavBar: boolean = false;
  showVisitorBar: boolean = false; 

  constructor(
    private fb: FormBuilder,
    private repository: NgoRepository,
    private stateRepository: StateRepository,
    private ngoTypeRepository: NgoTypeRepository,
    private sharedService: SharedService,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.getNGOS('');
    this.setTitle();
    this.initializeForm();
    this.initializeStates();
    this.initializeNgoTypes();
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
    this.ngoTypeRepository.getAllNgos().subscribe(response => {
      this.ngoTypes.push({ id: response.id, label: response.description })
    });
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

    this.getNGOS(params.toString());
  }
}
