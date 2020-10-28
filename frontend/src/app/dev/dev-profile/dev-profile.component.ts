import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DevModel } from '../core/dev-model';
import { DevService } from '../core/dev.service';

@Component({
  selector: 'app-dev-profile',
  templateUrl: './dev-profile.component.html',
  styleUrls: ['./dev-profile.component.css']
})
export class DevProfileComponent implements OnInit {

  dev: DevModel;

  constructor(
    private route: ActivatedRoute,
    private service: DevService
  ) { }

  ngOnInit(): void {
    this.getDev();
  }

  getDev(): void {
    const id = +this.route.snapshot.paramMap.get('id');    
    console.log(id);
    this.service.getDevByID(id).subscribe(dev => this.dev = dev);
  }
}
