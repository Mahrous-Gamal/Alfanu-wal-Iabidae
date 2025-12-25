import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateServiceService } from './../../shared/services/translate-service.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {



  menuOpen = false;
  activeSection = 'home';

  // Translation
  currentLang: string = 'en';
  flag: boolean = false;
  constructor() {}

  sections = [
    { url: '/home', label: 'NAV_HOME' },
    // { url: '/about', label: 'NAV_ABOUT' },
    { url: '/services', label: 'NAV_SERVICES' },
    { url: '/contact', label: 'NAV_CONTACT' },
    {
      label: 'NAV_LANGUAGE',
      dropdown: [
        { label: 'LANG_AR', url: '/accelon-note' },
        { label: 'LANG_EN', url: '/accelon-code' },
      ],
      showDropdown: false,
    },
  ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // For mobile dropdowns
  toggleDropdown(section: any) {
    section.showDropdown = !section.showDropdown;
  }

  scrollToSection(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection = sectionId;
    }
  }

  showScrollBackGround = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollBackGround = window.pageYOffset > 50;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
