import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor(private fb: FormBuilder) {}

  // contactForm = this.fb.group({
  //   firstName: ['', Validators.required],
  //   lastName: ['', Validators.required],
  //   phone: [''],
  //   email: ['', [Validators.required, Validators.email]],
  //   message: ['', Validators.required],
  //   agree: [false, Validators.requiredTrue],
  // });

  // submit() {
  //   if (this.contactForm.valid) {
  //     console.log(this.contactForm.value);
  //   }
  // }
}
