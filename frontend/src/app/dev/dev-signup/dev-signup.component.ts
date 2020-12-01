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

//TODO: Criar novos campos de skills (checkbox) e criar campo de contato (email/whatsapp)

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

    // const id = +this.route.snapshot.paramMap.get('id');
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
        },
        
      } as DevModel;

      if (dev.id) {
        this.repository.putDev(dev).subscribe(response => {
          this.form.reset()
        });
      } else {
        this.repository.postDev(dev).subscribe(response => {
          this.form.reset()
          console.log('salvou')
          this.router.navigateByUrl('/dev-signup-complete')
        });
      }
    }
  }

  onCancel() {
    this.form.reset();
  }

  initializeStates() {
    this.stateRepository.getAllStates().subscribe(response => {
      this.states.push({ label: response.state_name, value: response.id })
    });
  }

  initializeCities() {
    this.cities = [];
    let state_id: number = this.form.value.state;

    this.stateRepository.getAllCitiesByState(state_id).subscribe(response => {
      this.cities.push({ label: response.city_name, value: response.id })
    });
  }

  initializeSkills() {
    this.skillRepository.getAllSkills().subscribe(response => {
      this.skills.push({ id: response.id, description: response.description} )
    });
    console.log(this.skills);
  }

}
