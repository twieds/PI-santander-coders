import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NgoTypeRepository } from 'src/app/core/ngotype/ngotype-repository';
import { SharedService } from 'src/app/core/shared/shared.service';
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

  idNgo: string = '';
  userType: string = '';
  idDev: string = '';

  showDevNavBar: boolean = false;
  showNgoNavBar: boolean = false;
  showVisitorBar: boolean = false; 



  constructor(
    private route: ActivatedRoute,
    private repository: NgoRepository,
    private ngoTypeRepository: NgoTypeRepository,
    private sharedService: SharedService,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.getNGO();
    this.navUserType();
  }

  navUserType() {
    this.sharedService._userType.subscribe(userType => this.userType = userType);
    this.sharedService._idDev.subscribe(idDev => this.idDev = idDev);
    this.sharedService._idOng.subscribe(idOng => this.idNgo = idOng);

    if (this.idDev != '' && this.userType.toLowerCase() === 'dev') {
      this.showDevNavBar = true;
    } else if (this.idNgo != '' && this.userType.toLowerCase() === 'ngo') {
      this.showNgoNavBar = true;
    } else {
      this.showVisitorBar = true;
    }
  }

  getNGO(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.repository.getNgoById(id).subscribe(ngo => {
      this.ngo = ngo;
      this.getOngTypeDescription();
      this.getProjects(id);
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

  getProjects(id: number) {
    this.repository.getOngProjects(id).subscribe(project => {
      this.projects.push(project);
    })    
  }

  setTitle(ngo) {
    this.titleService.setTitle('ONG - ' + ngo);
  }
}
