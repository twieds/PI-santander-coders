import { state } from '@angular/animations';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { StateModel } from 'src/app/core/location/state/state-model';
import { StateRepository } from 'src/app/core/location/state/state-repository';
import { SkillModel } from 'src/app/core/skill/skill-model';
import { SkillRepository } from 'src/app/core/skill/skill-repository';
import { DevModel } from '../core/dev-model';
import { DevRepository } from '../core/dev-repository';

@Component({
  selector: 'app-dev-signup',
  templateUrl: './dev-signup.component.html',
  styleUrls: ['./dev-signup.component.css'],
  encapsulation: ViewEncapsulation.None
})

//TODO: VALIDAÇÕES DE CAMPOS

export class DevSignUpComponent implements OnInit {

  form: FormGroup;
  states: any[] = [];
  cities: any[] = [];
  skills: any[] = [];
  op: boolean = true;


  constructor(
    private fb: FormBuilder,
    private repository: DevRepository,
    private stateRepository: StateRepository,
    private skillRepository: SkillRepository,
    private titleService: Title,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.setTitle();
    this.initializeForm();
    this.initializeStates();
    this.initializeSkills();

    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.op = false;
      this.loadDev(id);
    }
  }

  setTitle() {
    this.titleService.setTitle('Desenvolvedor');
  }

  loadDev(id: number) {
    this.repository.getDevById(id).subscribe(response => {
      this.form.controls.id.setValue(response.id);
      this.form.controls.name.setValue(response.name)
      this.form.controls.bio.setValue(response.bio)
      this.form.controls.state.setValue(response.location.city.state.id)
      this.form.controls.whatsapp.setValue(response.whatsapp)
      this.form.controls.linkedin.setValue(response.linkedin)
      this.form.controls.github.setValue(response.github)
      this.form.controls.contact_email.setValue(response.contact_email)
      this.form.controls.selectedSkills.setValue(response.dev_practice)
      this.form.controls.selectedPracticeSkills.setValue(response.dev_skills)   
      this.initializeCities(response.location.city.id);
    });
  }


  initializeForm() {
    this.form = this.fb.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      bio: [''],
      city: [''],
      state: [''],
      whatsapp: [''],
      linkedin: [''],
      github: [''],
      contact_email: [''],
      selectedSkills: [''],
      selectedPracticeSkills: ['']
    })
  }

  onSubmit() {
    if (this.form.valid) {

      const dev = {
        id: this.form.value.id,
        name: this.form.value.name,
        bio: this.form.value.bio,
        whatsapp: this.form.value.whatsapp,
        linkedin: this.form.value.linkedin,
        github: this.form.value.github,
        contact_email: this.form.value.contact_email,
        dev_practice: this.form.value.selectedPracticeSkills,
        dev_skills: this.form.value.selectedSkills,        
        location: {
          city: { id: this.form.value.city }
        }
        
      } as DevModel;

      if (dev.id) {
        this.repository.putDev(dev).subscribe(response => {
          this.form.reset()
        });
      } else {
        this.repository.postDev(dev).subscribe(response => {
          this.form.reset()    
          this.router.navigateByUrl('/dev-signup-complete')
        });
      }
    }
  }

  onCancel() {
    this.form.reset();
    this.router.navigateByUrl('/home')
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


  initializeSkills() {
    this.skillRepository.getAllSkills().subscribe(response => {
      this.skills.push({ id: response.id, description: response.description} )
    });
  }

}
