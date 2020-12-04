import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SharedService } from 'src/app/core/shared/shared.service';

@Component({
  selector: 'app-header-primary-logged-dev',
  templateUrl: './header-primary-logged-dev.component.html',
  styleUrls: ['./header-primary-logged-dev.component.css']
})
export class HeaderPrimaryLoggedDevComponent implements OnInit {
  idDev: string;
  items: MenuItem[];

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService._idDev.subscribe(idDev => this.idDev = idDev);

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
          { label: 'Editar', icon: 'pi pi-fw pi-pencil', routerLink: [('/dev-signup/' + this.idDev)] },
        ]
      },
    ];
  }

}
