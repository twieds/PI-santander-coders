import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { StateRepository } from 'src/app/core/location/state/state-repository';
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
  skills: any[] = [];
  op: boolean = true;

  constructor(
    private fb: FormBuilder, 
    private titleService: Title,
    private repository: NgoRepository,
    private stateRepository: StateRepository,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.setTitle();

    this.initializeForm();
    this.initializeStates();

    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.op = false;
      this.loadNgo(id);
    }

  }

  setTitle() {
    this.titleService.setTitle('Cadastro de ONG');
  }

  loadNgo(id: number) {
    this.repository.getNgoById(id).subscribe(response => {
      this.form.controls.id.setValue(response.id)
      this.form.controls.name.setValue(response.name)
      this.form.controls.bio.setValue(response.bio)
      this.form.controls.how_can_we_help.setValue(response.how_can_we_help)
      this.form.controls.state.setValue(response.location.city.state.id)
      this.form.controls.ongType.setValue(response.ongType)
      this.form.controls.whatsapp.setValue(response.whatsapp)
      this.form.controls.facebook.setValue(response.facebook)
      this.form.controls.instagram.setValue(response.instagram)
      this.form.controls.contact_email.setValue(response.contact_email)
      this.initializeCities(response.location.city.id);
    })
  }

  initializeForm() {
    this.form = this.fb.group({
      id: [''],
      name: [''],
      bio: [''],
      how_can_we_help: [''],
      city: [''],
      state: [''],
      ongType: [''],
      whatsapp: [''],
      facebook: [''],
      instagram: [''],
      contact_email: ['']
    })
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
        console.log(city_id)
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
        how_can_we_help: this.form.value.how_can_we_help,
        ongType: this.form.value.ongType,
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
          this.form.reset()    
          this.router.navigateByUrl('/ngo-signup-complete')
        });
      }
    }
  }

  onCancel() {
    this.form.reset();
    this.router.navigateByUrl('/home')
  }
}
