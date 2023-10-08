import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.less']
})
export class MobileMenuComponent {
  isMenuOpen = false; // Initialize as false

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Add a function to close the menu when a link is clicked
  closeMenu() {
    this.isMenuOpen = false;
  }

}
