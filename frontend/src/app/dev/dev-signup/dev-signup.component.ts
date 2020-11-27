import { state } from '@angular/animations';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { StateModel } from 'src/app/core/location/state/state-model';
import { StateRepository } from 'src/app/core/location/state/state-repository';
import { DevModel } from '../core/dev-model';
import { DevRepository } from '../core/dev-repository';

@Component({
  selector: 'app-dev-signup',
  templateUrl: './dev-signup.component.html',
  styleUrls: ['./dev-signup.component.css'],
  encapsulation:ViewEncapsulation.None
})

//TODO: Criar novos campos de skills (checkbox) e criar campo de contato (email/whatsapp)

export class DevSignUpComponent implements OnInit {

  form: FormGroup;
  states: any[] = [];
  cities: any[] = [];

  constructor(
    private fb: FormBuilder,
    private repository: DevRepository,
    private stateRepository : StateRepository,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.setTitle();
    this.initializeForm();
    this.initializeStates();
  }

  setTitle() {
    this.titleService.setTitle('Desenvolvedor');
  }

  initializeForm() {
    this.form = this.fb.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      bio: [''],
      city: [''],
      state: ['']
      // dev_practice: ['']
      // dev_skills: ['']
    })
  }

  onSubmit() {
    if (this.form.valid) {

      const dev = {
        id: this.form.value.id,
        name: this.form.value.name,
        bio: this.form.value.bio,
        location: {
          city: { id: this.form.value.city }
        }
      } as DevModel;

      console.log(dev);

      //se já existe registro, atualiza (método put)
      //se não existe, cria um novo registro (método post)
      if (dev.id) {
        this.repository.putDev(dev).subscribe(response => {
          
          this.form.reset()
        });
      } else {
        this.repository.postDev(dev).subscribe(response => {
          console.log('salvou')
          this.form.reset()
        });
      }
    }
  }

  onCancel() {
    this.form.reset();
  }


  initializeStates() {
    this.stateRepository.getAllStates().subscribe(response => {
      console.log(response)
      this.states.push( {label: response.state_name, value: response.id} )
    });
  }

  initializeCities() {
    this.cities = [];
    let state_id: number = this.form.value.state;
    // let state_id=1;
    console.log('Profile Changed: ' +state_id);

    this.stateRepository.getAllCitiesByState(state_id).subscribe(response => {
      this.cities.push( {label: response.city_name, value: response.id} )
    });
  }

}
