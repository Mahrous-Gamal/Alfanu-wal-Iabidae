import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { TranslateServiceService } from './shared/services/translate-service.service';
import { TranslateServiceService } from './../../shared/services/translate-service.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
// Define the Project type
interface Project {
  image: string;
  title: string;
  location: string;
  siteCrew: string;
}
@Component({
  selector: 'app-services',
  imports: [TranslateModule, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
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

  projects: Project[] = [
    {
      image: './assets/images/1.jpeg',
      title: 'CITY_AJMAN',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
    {
      image: './assets/images/2.jpeg',
      title: 'CITY_AJMAN',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
    {
      image: './assets/images/3.jpeg',
      title: 'CITY_AJMAN',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
    {
      image: './assets/images/4.jpeg',
      title: 'CITY_AJMAN',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
    {
      image: './assets/images/5.jpeg',
      title: 'CITY_AJMAN',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
    {
      image: './assets/images/6.jpeg',
      title: 'CITY_AJMAN',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
    {
      image: './assets/images/7.jpg',
      title: 'CITY_SHARJAH',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: '12 On-Site Workers',
    },
    {
      image: './assets/images/8.jpg',
      title: 'CITY_SHARJAH',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
    {
      image: './assets/images/9.jpg',
      title: 'CITY_SHARJAH',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
    {
      image: './assets/images/10.jpg',
      title: 'CITY_SHARJAH',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: '12 On-Site Workers',
    },
    {
      image: './assets/images/11.jpg',
      title: 'CITY_SHARJAH',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
    {
      image: './assets/images/12.jpg',
      title: 'CITY_SHARJAH',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
    {
      image: './assets/images/13.jpg',
      title: 'CITY_SHARJAH',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
    {
      image: './assets/images/14.jpg',
      title: 'CITY_SHARJAH',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
    {
      image: './assets/images/15.jpg',
      title: 'CITY_SHARJAH',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
    {
      image: './assets/images/16.jpeg',
      title: 'CITY_SHARJAH',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
    {
      image: './assets/images/17.jpeg',
      title: 'CITY_DUBAI',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
    {
      image: './assets/images/18.jpeg',
      title: 'CITY_DUBAI',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
    {
      image: './assets/images/19.jpeg',
      title: 'CITY_DUBAI',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
    {
      image: './assets/images/20.jpeg',
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
      image: './assets/images/22.jpeg',
      title: 'CITY_DUBAI',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
    {
      image: './assets/images/23.jpeg',
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
      title: 'CITY_DUBAI',
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
    {
      image: './assets/images/28.jpeg',
      title: 'CITY_AJMAN',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
    {
      image: './assets/images/29.jpeg',
      title: 'CITY_AJMAN',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
    {
      image: './assets/images/30.jpeg',
      title: 'CITY_AJMAN',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
    {
      image: './assets/images/31.jpeg',
      title: 'CITY_AJMAN',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
    {
      image: './assets/images/32.jpeg',
      title: 'CITY_AJMAN',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
    {
      image: './assets/images/33.jpeg',
      title: 'CITY_AJMAN',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
    {
      image: './assets/images/34.jpeg',
      title: 'CITY_AJMAN',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
    {
      image: './assets/images/35.jpeg',
      title: 'CITY_AJMAN',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
    {
      image: './assets/images/36.jpeg',
      title: 'CITY_AJMAN',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
    {
      image: './assets/images/37.jpeg',
      title: 'CITY_AJMAN',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
    {
      image: './assets/images/38.jpeg',
      title: 'CITY_AJMAN',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
    {
      image: './assets/images/39.jpeg',
      title: 'CITY_AJMAN',
      location: 'PROJECT_DESCRIPTION',
      siteCrew: 'ON_SITE_WORKERS',
    },
  ];
}
