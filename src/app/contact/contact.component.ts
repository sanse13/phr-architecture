import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  bootstrapLinkedin,
  bootstrapTelephoneFill,
} from '@ng-icons/bootstrap-icons';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

interface EmailForm {
  sourceEmail: FormControl<string>;
  messageBody: FormControl<string>;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIcon, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  viewProviders: [provideIcons({ bootstrapLinkedin, bootstrapTelephoneFill })],
})
export class ContactComponent {
  contactForm = new FormGroup<EmailForm>({
    sourceEmail: new FormControl<string>('pablohernandezreques@gmail.com', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    messageBody: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  constructor() {}

  sendEmail(): void {
    const { sourceEmail, messageBody } = this.contactForm.getRawValue();

    window.location.href = `mailto:${sourceEmail}?subject=Contacto&body=${encodeURIComponent(messageBody)}`;
  }
}
