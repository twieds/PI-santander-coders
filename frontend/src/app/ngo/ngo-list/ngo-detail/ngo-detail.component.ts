import { Component, Input, OnInit } from '@angular/core';
import { NgoTypeRepository } from 'src/app/core/ngotype/ngotype-repository';
import { NgoModel } from '../../core/ngo-model';

@Component({
  selector: 'app-ngo-detail',
  templateUrl: './ngo-detail.component.html',
  styleUrls: ['./ngo-detail.component.css']
})
export class NgoDetailComponent implements OnInit {

  @Input() ngo: NgoModel;
  ngoTypeDescription: string;

  constructor(
    private ngoTypeRepository: NgoTypeRepository
  ) { }

  ngOnInit(): void {
    this.getOngTypeDescription();
  }

  getOngTypeDescription() {
    let id: number = this.ngo.ongTypeId;

    if (id) {
      this.ngoTypeRepository.getNgosById(id).subscribe(response => {
        this.ngoTypeDescription = response.description;
      })

    }
  }

}
