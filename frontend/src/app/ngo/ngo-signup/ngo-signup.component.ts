import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { StateRepository } from 'src/app/core/location/state/state-repository';
import { NgoTypeRepository } from 'src/app/core/ngotype/ngotype-repository';
import { SharedService } from 'src/app/core/shared/shared.service';
import { NgoModel } from '../core/ngo-model';
import { NgoRepository } from '../core/ngo-repository';
import { NgoService } from '../core/ngo.service';

@Component({
  selector: 'app-ngo-signup',
  templateUrl: './ngo-signup.component.html',
  styleUrls: ['./ngo-signup.component.css']
})

//TODO: VALIDAÇÕES DE CAMPOS
export class NgoSignUpComponent implements OnInit {

  form: FormGroup;
  states: any[] = [];
  cities: any[] = [];
  ngoTypes: any[] = [];
  op: boolean = true;

  idOng: string = '';
  userType: string = '';
  idDev: string = '';

  showDevNavBar: boolean = false;
  showNgoNavBar: boolean = false;
  showVisitorBar: boolean = false; 

  constructor(
    private fb: FormBuilder,
    private titleService: Title,
    private repository: NgoRepository,
    private stateRepository: StateRepository,
    private ngoTypeRepository: NgoTypeRepository,
    private route: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.setTitle();

    this.initializeForm();
    this.initializeStates();
    this.initializeNgoTypes();
    this.navUserType();

    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.op = false;
      this.loadNgo(id);
    }
  }

  navUserType() {
    this.sharedService._userType.subscribe(userType => this.userType = userType);
    this.sharedService._idDev.subscribe(idDev => this.idDev = idDev);
    this.sharedService._idOng.subscribe(idOng => this.idOng = idOng);

    if (this.idDev != '' && this.userType.toLowerCase() === 'dev') {
      this.showDevNavBar = true;
    } else if (this.idOng != '' && this.userType.toLowerCase() === 'ngo') {
      this.showNgoNavBar = true;
    } else {
      this.showVisitorBar = true;
    }
  }

  updateAccessType(id: number) {
    this.sharedService.updateIdOng(id.toString());
    this.sharedService.updateUserType('ngo');
  }

  setTitle() {
    this.titleService.setTitle('Cadastro de ONG');
  }

  loadNgo(id: number) {
    this.repository.getNgoById(id).subscribe(response => {
      this.form.controls.id.setValue(response.id)
      this.form.controls.name.setValue(response.name)
      this.form.controls.bio.setValue(response.bio)
      this.form.controls.password.setValue(response.password)
      this.form.controls.email.setValue(response.email)
      this.form.controls.how_can_we_help.setValue(response.how_can_we_help)
      this.form.controls.state.setValue(response.location.city.state.id)
      this.form.controls.ongTypeId.setValue(response.ongTypeId)
      this.form.controls.whatsapp.setValue(response.whatsapp)
      this.form.controls.facebook.setValue(response.facebook)
      this.form.controls.instagram.setValue(response.instagram)
      this.form.controls.contact_email.setValue(response.contact_email)
      this.initializeCities(response.location.city.id);
      this.updateAccessType(response.id);
    })
  }

  initializeForm() {
    this.form = this.fb.group({
      id: [''],
      name: [''],
      bio: [''],
      password: [''],
      email: [''],
      how_can_we_help: [''],
      city: [''],
      state: [''],
      ongTypeId: [''],
      whatsapp: [''],
      facebook: [''],
      instagram: [''],
      contact_email: ['']
    })
  }

  initializeNgoTypes() {
    this.ngoTypeRepository.getAllNgos().subscribe(response => {
      this.ngoTypes.push({ label: response.description, value: response.id })
    });
  }

  initializeStates() {
    this.stateRepository.getAllStates().subscribe(response => {
      this.states.push({ label: response.state_name, value: response.id })
    });
  }

  initializeCities(city_id: number) {
    this.cities = [];
    let state_id: number = this.form.value.state;
    this.stateRepository.getAllCitiesByState(state_id).subscribe(response => {
      this.cities.push({ label: response.city_name, value: response.id })

      if (this.op == false) {
        this.form.controls.city.setValue(city_id)
      }
    });
  }

  onSubmit() {
    if (this.form.valid) {

      const ngo = {
        id: this.form.value.id,
        name: this.form.value.name,
        bio: this.form.value.bio,
        email: this.form.value.email,
        password: this.form.value.password,
        how_can_we_help: this.form.value.how_can_we_help,
        ongTypeId: this.form.value.ongTypeId,
        whatsapp: this.form.value.whatsapp,
        facebook: this.form.value.facebook,
        instagram: this.form.value.instagram,
        contact_email: this.form.value.contact_email,
        location: {
          city: { id: this.form.value.city }
        }
      } as NgoModel;


      if (ngo.id) {
        this.repository.putNgo(ngo).subscribe(response => {
          this.form.reset()
        });
      } else {
        this.repository.postNgo(ngo).subscribe(response => {
          // this.form.reset()
          // this.router.navigateByUrl('/ngo-signup-complete')
          this.repository.getNgoByEmail(response.email).subscribe(response => {
            this.setAccess(response.id);
          })
        });
      }
    }
  }

  setAccess = async (id: number) => {
    try {
      const updateNgo = () => {
        this.updateAccessType(id);
      }

      const navigate = () => {
        updateNgo();
        this.router.navigateByUrl('/ngo-dashboard')
      }

      await navigate();
    } catch (err) {
      console.log(err)
    }
  }

  onCancel() {
    this.form.reset();
    this.router.navigateByUrl('/home')
  }
}
