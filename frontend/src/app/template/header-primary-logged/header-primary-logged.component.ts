import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SharedService } from 'src/app/core/shared/shared.service';

@Component({
  selector: 'app-header-primary-logged',
  templateUrl: './header-primary-logged.component.html',
  styleUrls: ['./header-primary-logged.component.css']
})
export class HeaderPrimaryLoggedComponent implements OnInit {
  idOng: string;
  items: MenuItem[];

  constructor(private sharedService: SharedService) { }


  ngOnInit() {

    this.sharedService._idOng.subscribe(idOng => this.idOng = idOng);

    this.items = [
      {
        label: 'HOME',
        routerLink: ['/home']
      },
      {
        label: 'QUEM SOMOS',
        routerLink: ['/home'],
      },
      {
        label: 'PROCURAR', icon: 'pi pi-fw pi-search',
        items: [
          { label: 'Devs', icon: 'pi pi-fw pi-desktop', routerLink: ['/dev-list'] },
          { label: 'Ongs', icon: 'pi pi-fw pi-heart', routerLink: ['/ngo-list'] },
          { label: 'Projetos', icon: 'pi pi-fw pi-briefcase', routerLink: ['/project-list'] }
        ]
      },
      {
        label: 'MEU PERFIL', icon: 'pi pi-fw pi-user',
        items: [
          { label: 'Editar', icon: 'pi pi-fw pi-pencil', routerLink: [('/ngo-signup/' + this.idOng)] },
          { label: 'Novo projeto', icon: 'pi pi-fw pi-plus', routerLink: ['/' + (this.idOng + '/add-project')] },
          { label: 'Meus projetos', icon: 'pi pi-fw pi-briefcase', routerLink: ['/ngo-dashboard'] }
        ]
      },
    ];
  }

}
