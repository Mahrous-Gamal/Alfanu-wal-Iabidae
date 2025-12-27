import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateServiceService } from './../../shared/services/translate-service.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact',
imports: [TranslateModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {

  showScrollButton = false;
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.pageYOffset > 200;
  }
}
