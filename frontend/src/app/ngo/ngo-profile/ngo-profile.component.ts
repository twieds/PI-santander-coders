import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NgoTypeRepository } from 'src/app/core/ngotype/ngotype-repository';
import { ProjectModel } from 'src/app/project/core/project-model';
import { ProjectRepository } from 'src/app/project/core/project-repository';
import { NgoModel } from '../core/ngo-model';
import { NgoRepository } from '../core/ngo-repository';

@Component({
  selector: 'app-ngo-profile',
  templateUrl: './ngo-profile.component.html',
  styleUrls: ['./ngo-profile.component.css']
})
export class NgoProfileComponent implements OnInit {

  ngo: NgoModel;
  ngoTypeDescription: string;
  projects: ProjectModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private repository: NgoRepository,
    private ngoTypeRepository: NgoTypeRepository,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.getNGO();
    this.getProjects();
  }

  getNGO(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.repository.getNgoById(id).subscribe(ngo => {
      this.ngo = ngo;
      this.getOngTypeDescription();
      this.setTitle(ngo.name);
    });
  }

  getOngTypeDescription() {
    let id: number = this.ngo.ongTypeId;

    if (id) {
      this.ngoTypeRepository.getNgosById(id).subscribe(response => {
        this.ngoTypeDescription = response.description;
      })

    }
  }

  getProjects() {
    this.repository.getOngProjects(1).subscribe(project => {
      this.projects.push(project);
    })

  }

  setTitle(ngo) {
    this.titleService.setTitle('ONG - ' + ngo);
  }
}
