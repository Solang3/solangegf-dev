import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.less']
})
export class LanguageSwitcherComponent  implements OnInit {
  @Output() languageChanged = new EventEmitter<string>();
  selectedLanguage!: string; // Add a property to store the selected language

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    // Get the browser's language or use the default language
    const browserLang = this.translate.getBrowserLang();
    this.selectedLanguage = browserLang?.match(/en|es/) ? browserLang : 'es';
  }

  switchLanguage(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.languageChanged.emit(selectedValue);
  }
}
