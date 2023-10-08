import { Component, ViewChild, HostListener } from '@angular/core';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})

export class NavComponent {
  @ViewChild('mobileMenu') mobileMenu!: MobileMenuComponent;

  // Close the menu when the window width changes
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (window.innerWidth >= 768) {
      this.mobileMenu.isMenuOpen = false;
    }
  }

}
