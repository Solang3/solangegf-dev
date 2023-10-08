import { NgModule, LOCALE_ID, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { NavComponent } from './components/nav/nav.component';
import { StripHtmlPipe } from './strip-html.pipe';
import { BlogPostDetailComponent } from './components/blog-post-detail/blog-post-detail.component';
import { ProductComponent } from './components/product/product.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { TranslationModule } from './translation.module';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

export function initLocalization(l10nLoader: L10nLoader, locale: LocaleService): Function {
  return () => {
    // Set the default locale based on the user's browser language preference
    const userLang = locale.getPreferredLanguage();
    locale.setDefaultLocale(userLang);

    // Load the translations
    return l10nLoader.load().then(() => {});
  };
}

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    NavComponent,
    StripHtmlPipe,
    BlogPostDetailComponent,
    ProductComponent,
    AboutComponent,
    HomeComponent,
    MobileMenuComponent,
    LanguageSwitcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslationModule.forRoot({
      storage: StorageStrategy.Cookie
    })
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initLocalization,
      deps: [L10nLoader, TranslationService, LocaleService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeEs);
  }
}
