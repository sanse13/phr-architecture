import {Component} from '@angular/core';
import {NgIcon, provideIcons} from '@ng-icons/core';
import {bootstrapLinkedin} from '@ng-icons/bootstrap-icons';
import {FormControl, FormGroup, ReactiveFormsModule, Validators,} from '@angular/forms';

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
  viewProviders: [provideIcons({bootstrapLinkedin})],
})
export class ContactComponent {
  contactForm: FormGroup;
  destinationEmail = 'pablo.hernandez.reques@gmail.com';

  constructor() {
    this.contactForm = new FormGroup<EmailForm>({
      sourceEmail: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      messageBody: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });
  }

  sendEmail(): void {
    const {sourceEmail, messageBody} = this.contactForm.getRawValue();

    window.location.href = `mailto:${this.destinationEmail}?subject=Nuevo%20mensaje%20de%20${encodeURIComponent(sourceEmail)}&body=${encodeURIComponent(messageBody)}`;
  }
}
