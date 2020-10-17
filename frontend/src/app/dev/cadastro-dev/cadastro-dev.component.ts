import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { race } from 'rxjs/operators';
import { DevService } from '../dev.service';

@Component({
  selector: 'app-cadastro-dev',
  templateUrl: './cadastro-dev.component.html',
  styleUrls: ['./cadastro-dev.component.css']
})
export class CadastroDevComponent implements OnInit{

  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private service: DevService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      avatar: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
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
}
