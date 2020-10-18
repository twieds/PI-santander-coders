import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjetoService } from '../projeto.service';

@Component({
  selector: 'app-cadastro-projeto',
  templateUrl: './cadastro-projeto.component.html',
  styleUrls: ['./cadastro-projeto.component.css']
})

// TODO: add methods put and delete
export class CadastroProjetoComponent implements OnInit {
  
  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private service: ProjetoService) { }

  // TODO: add validators  
  ngOnInit(): void {
    this.form = this.fb.group({
      title: [''],
      description: [''],
      deadline: [''],
      category: ['']
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
}
