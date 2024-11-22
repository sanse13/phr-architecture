import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapChevronDown } from '@ng-icons/bootstrap-icons';
import { PopOverComponent } from '../pop-over/pop-over.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgIcon, PopOverComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  viewProviders: [provideIcons({ bootstrapChevronDown })],
})
export class HomeComponent {
  @ViewChild('imageSection') imageSection!: ElementRef;

  scrollIntoView(): void {
    const target = this.imageSection.nativeElement;

    const targetPosition = target.offsetTop;

    const duration = 500;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number;

    const scrollAnimation = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const timeElapsed = timestamp - startTime;
      const scrollProgress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, startPosition + distance * scrollProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(scrollAnimation);
      }
    };

    requestAnimationFrame(scrollAnimation);
  }
}
