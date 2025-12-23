import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule],
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
    { url: '/home', label: 'Home' },
    { url: '/about', label: 'About' },
    { url: '/services', label: 'Services' },
    { url: '/contact', label: 'Contact' },
    // {
    //   label: 'Outsourcing Services',
    //   dropdown: [
    //     { label: 'Revenue cycle management', url: '/revenue' },
    //     { label: 'Healthcare consulting', url: '/healthcare-consulting' },
    //     { label: 'Medical contact center', url: '/medical-contact-center' },
    //   ],
    //   showDropdown: false,
    // },
    {
      label: 'Languge',
      dropdown: [
        { label: 'Arabic', url: '/accelon-note' },
        { label: 'English', url: '/accelon-code' },
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
