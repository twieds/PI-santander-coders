import { Component, OnInit } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ngo-signup',
  templateUrl: './ngo-signup.component.html',
  styleUrls: ['./ngo-signup.component.css']
})
export class NgoSignUpComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.setTitle();
  }

  setTitle() {
    this.titleService.setTitle('Cadastro de ONG');
  }

}
FormGroupDirective