import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { bootstrapChevronDown } from '@ng-icons/bootstrap-icons';
import { PopOverComponent } from '../pop-over/pop-over.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, PopOverComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  viewProviders: [provideIcons({ bootstrapChevronDown })],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('imageSection') imageSection!: ElementRef;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0');
          entry.target.classList.add('opacity-100');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const images = document.querySelectorAll('.fade-in-image');
    images.forEach(image => observer.observe(image));
  }


  scrollIntoView(): void {
    const target = this.imageSection.nativeElement;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
