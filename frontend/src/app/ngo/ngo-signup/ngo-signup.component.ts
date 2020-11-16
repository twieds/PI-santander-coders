import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { NgoService } from '../core/ngo.service';

@Component({
  selector: 'app-ngo-signup',
  templateUrl: './ngo-signup.component.html',
  styleUrls: ['./ngo-signup.component.css']
})
export class NgoSignUpComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder, 
    private titleService: Title,
    private service: NgoService
    ) { }

  ngOnInit(): void {
    this.setTitle();

    //inicialliza o formulário
    this.form = this.fb.group({
      name: [''],
      cnpj: [''],
      bio: [''],
      how_can_we_help: [''],
      socials: ['']
    })
  }

  setTitle() {
    this.titleService.setTitle('Cadastro de ONG');
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
}
