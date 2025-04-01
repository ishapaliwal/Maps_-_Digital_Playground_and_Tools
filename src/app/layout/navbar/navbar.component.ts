import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Zoning', routerLink: '/zoning' },
      { label: 'Routing', routerLink: '/routing' },
      { label: 'Turfing', routerLink: '/turfing' },
      { label: 'Isochrone', routerLink: '/isochrone' },
      { label: 'Filter', routerLink: '/filtering' },
      { label: 'Heatmap', routerLink: '/heatmap' },
    ];
  }
}