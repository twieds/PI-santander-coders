import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ProjectService } from '../core/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})

// TODO: add methods put and delete
export class AddProjectComponent implements OnInit {
  
  form: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder, 
    private service: ProjectService,
    private titleService: Title
    ) { }

  // TODO: add validators  
  ngOnInit(): void {
    this.setTitle();

    //inicialliza o formulário
    this.form = this.fb.group({
      title: [''],
      description: [''],
      deadline: [''],
      category: ['']
    })

  }

  setTitle() {
    this.titleService.setTitle('Cadastro de Projeto');
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
