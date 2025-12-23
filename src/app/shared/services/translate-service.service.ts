import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateServiceService {
  constructor(
    readonly translate: TranslateService,
    @Inject(PLATFORM_ID) readonly platformId: Object
  ) {
    let defaultLang = 'en';
    let direction: 'ltr' | 'rtl' = 'ltr';

    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('lang');
      const savedDir = localStorage.getItem('dir') as 'ltr' | 'rtl' | null;

      if (savedLang) defaultLang = savedLang;
      if (savedDir) direction = savedDir;
    }

    this.applyDirection(direction);
    this.translate.use(defaultLang);
  }

  useLanguage(lang: string) {
    this.translate.use(lang);

    let dir: 'ltr' | 'rtl' = lang === 'ar' ? 'rtl' : 'ltr';

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', lang);
      localStorage.setItem('dir', dir);
    }

    this.applyDirection(dir);
  }

  applyDirection(direction: 'ltr' | 'rtl') {
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.dir = direction;

      document.documentElement.classList.remove('rtl', 'ltr');
      document.documentElement.classList.add(direction);
    }
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang || 'en';
  }
}
