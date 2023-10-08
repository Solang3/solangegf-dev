import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.less']
})
export class LanguageSwitcherComponent {
  @Output() languageChanged = new EventEmitter<string>();

  switchLanguage(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.languageChanged.emit(selectedValue);
  }
}
