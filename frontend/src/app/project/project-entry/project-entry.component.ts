import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-entry',
  templateUrl: './project-entry.component.html',
  styleUrls: ['./project-entry.component.css']
})

// TODO: add methods put and delete
export class ProjectEntryComponent implements OnInit {
  
  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private service: ProjectService) { }

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
