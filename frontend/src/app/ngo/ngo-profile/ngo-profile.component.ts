import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NgoModel } from '../core/ngo-model';
import { NgoService } from '../core/ngo.service';

@Component({
  selector: 'app-ngo-profile',
  templateUrl: './ngo-profile.component.html',
  styleUrls: ['./ngo-profile.component.css']
})
export class NgoProfileComponent implements OnInit {

  ngo: NgoModel;

  constructor(
    private route: ActivatedRoute,
    private service: NgoService,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.getNGO();
  }

  getNGO(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.service.getNgoByID(id).subscribe(ngo => {
      this.ngo = ngo;
      this.setTitle(ngo.name);
    });
  }

  setTitle(ngo) {
    this.titleService.setTitle('ONG - ' + ngo);
  }
}
