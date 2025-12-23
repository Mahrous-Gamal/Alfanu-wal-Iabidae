import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateServiceService } from './shared/services/translate-service.service';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from "./layouts/header/header.component";
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./layouts/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule, HeaderComponent, CommonModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  selectedLang = 'en';

  constructor(readonly translaservice: TranslateServiceService) {
    this.selectedLang = this.translaservice.getCurrentLanguage();
  }

  switchLanguage(lang: string) {
    console.log(lang);
    this.selectedLang = lang;
    this.translaservice.useLanguage(lang);
  }

    showScrollButton = false;
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.pageYOffset > 200;
  }


}
