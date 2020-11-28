import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DevModel } from '../core/dev-model';
import { DevRepository } from '../core/dev-repository';
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
    private repository: DevRepository,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.getDev();
  }

  getDev(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.repository.getDevById(id).subscribe(dev => {
      this.dev = dev
      this.setTitle(dev.name);
    });
}

  setTitle(dev) {
    this.titleService.setTitle('Dev - ' + dev);
  }
}
