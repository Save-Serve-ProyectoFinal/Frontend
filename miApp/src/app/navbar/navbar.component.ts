import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: false
})
export class NavbarComponent implements OnInit {

  constructor(private menu: MenuController) { }

  openMenu() {
    this.menu.open('first');
  }

  ngOnInit() { }

}
