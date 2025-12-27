import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
// Define the Project type
interface Project {
  image: string;
  title: string;
  location: string;
  siteCrew: string;
}
interface Testimonial {
  image: string;
  text: string;
  name: string;
  title: string;
}
@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  showScrollButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.pageYOffset > 200;
  }

  projects: Project[] = [
    {
      image: './assets/images/19.jpeg',
      title: 'CITY_DUBAI',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
    {
      image: './assets/images/21.jpeg',
      title: 'CITY_DUBAI',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },

    {
      image: './assets/images/24.jpeg',
      title: 'CITY_DUBAI',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
    {
      image: './assets/images/25.jpeg',
      title: 'CITY_AJMAN',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
    {
      image: './assets/images/26.jpeg',
      title: 'CITY_AJMAN',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
    {
      image: './assets/images/27.jpeg',
      title: 'CITY_AJMAN',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
  ];

  testimonials: Testimonial[] = [
    {
      image: 'assets/images/ceo.png',
      text: 'TESTIMONIAL_TEXT',
      name: 'Name_CEO',
      title: 'CEO_TITLE',
    },
    {
      image: 'assets/images/manger.jpeg',
      text: 'TESTIMONIAL_TEXT',
      name: 'Name_PROJECT_MANAGER',
      title: 'PROJECT_MANAGER_TITLE',
    },
  ];

  currentIndex = signal(0);

  next() {
    this.currentIndex.update((i) => (i + 1) % this.testimonials.length);
  }

  prev() {
    this.currentIndex.update(
      (i) => (i - 1 + this.testimonials.length) % this.testimonials.length
    );
  }

  current() {
    return this.testimonials[this.currentIndex()];
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
