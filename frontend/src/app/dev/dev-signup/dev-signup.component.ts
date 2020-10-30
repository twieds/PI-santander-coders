import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { race } from 'rxjs/operators';
import { DevService } from '../core/dev.service';

@Component({
  selector: 'app-dev-signup',
  templateUrl: './dev-signup.component.html',
  styleUrls: ['./dev-signup.component.css']
})

// TODO: add methods put and delete

export class DevSignUpComponent implements OnInit{

  form: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder, 
    private service: DevService,
    private titleService: Title
    ) { }

  // TODO: 
  //  [ ] add all form fields
  //  [ ] add validators 
  ngOnInit(): void {
    this.setTitle();

    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      avatar: [''],
      bio: ['']
    })
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value)
    if (this.form.valid) {
      console.log('submit');
      this.service.create(this.form.value).subscribe(
        success => console.log('sucesso'),
        error => console.error(error),
        () => console.log('request completo')
      );
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }

  setTitle() {
    this.titleService.setTitle('Cadastro de desenvolvedor');
  }
}
