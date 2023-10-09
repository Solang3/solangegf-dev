import { Component, ViewChild, HostListener } from '@angular/core';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { TranslateService } from '@ngx-translate/core'; // Import TranslateService

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})

export class NavComponent {
  @ViewChild('mobileMenu') mobileMenu!: MobileMenuComponent;
  @ViewChild(LanguageSwitcherComponent) languageSwitcher!: LanguageSwitcherComponent;

  constructor(private translate: TranslateService) {} // Inject TranslateService here

  // Close the menu when the window width changes
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (window.innerWidth >= 768) {
      this.mobileMenu.isMenuOpen = false;
    }
  }

  ngAfterViewInit(): void {
    this.translate.setDefaultLang('en'); // Set the default language (e.g., English)

    // Subscribe to language changes
    this.languageSwitcher.languageChanged.subscribe((selectedLanguage: string) => {
      this.translate.use(selectedLanguage);
    });
  }
}
