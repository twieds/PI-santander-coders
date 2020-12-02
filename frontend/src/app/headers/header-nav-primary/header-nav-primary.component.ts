import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-header-nav-primary',
    templateUrl: './header-nav-primary.component.html',
    styleUrls: ['./header-nav-primary.component.css']
})
export class HeaderNavPrimaryComponent implements OnInit {

    constructor() { }

    items: MenuItem[];

    ngOnInit() {
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
                label: 'PROCURAR',
                items: [
                    { label: 'Devs', icon: 'pi pi-fw pi-desktop', routerLink: ['/dev-list']},
                    { label: 'Ongs', icon: 'pi pi-fw pi-heart', routerLink: ['/ngo-list'] },
                    { label: 'Projetos', icon: 'pi pi-fw pi-briefcase', routerLink: ['/project-list'] }
                ]
            },
            // {
            //     label: 'Edit',
            //     icon: 'pi pi-fw pi-pencil',
            //     items: [
            //         {label: 'Delete', icon: 'pi pi-fw pi-trash'},
            //         {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
            //     ]
            // }
        ];
    }
}
