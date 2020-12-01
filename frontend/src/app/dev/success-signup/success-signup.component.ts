import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-success-signup',
  templateUrl: './success-signup.component.html',
  styleUrls: ['./success-signup.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SuccessSignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
