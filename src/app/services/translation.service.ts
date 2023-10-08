// translation.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private currentLanguage = 'en'; // Default language
  private translations: any = {};

  // BehaviorSubject to notify components when the language changes
  public currentLanguage$ = new BehaviorSubject<string>(this.currentLanguage);

  constructor(private http: HttpClient) {}

  // Load translations for the selected language
  loadTranslations(language: string) {
    this.http.get(`/assets/translations/${language}.json`).subscribe((translations) => {
      this.translations = translations;
      this.currentLanguage = language;
      this.currentLanguage$.next(language);
    });
  }

  // Get a translation by key
  getTranslation(key: string): string {
    return this.translations[key] || key; // Use the key as a fallback
  }

  // Set the selected language and load translations
  setLanguage(language: string) {
    this.loadTranslations(language);
  }
}
