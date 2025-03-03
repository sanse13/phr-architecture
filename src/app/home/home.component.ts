import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { bootstrapChevronDown } from '@ng-icons/bootstrap-icons';
import { PopOverComponent } from '../pop-over/pop-over.component';
import { ScrollPositionService } from '../scroll-position.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, PopOverComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [Document],
  viewProviders: [provideIcons({ bootstrapChevronDown })],
})
export class HomeComponent implements AfterViewInit, OnInit {
  @ViewChild('imageSection') imageSection!: ElementRef;
  private readonly router = inject(Router);
  private readonly scrollPositionService = inject(ScrollPositionService);

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.scrollY > 0) {
      this.scrollPositionService.setScrollPosition(window.scrollY);
    }
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const position = this.scrollPositionService.getScrollPosition();
        if (position === 0) {
          return;
        }

        setTimeout(() => {
          document.documentElement.scrollTo({
            top: position,
            behavior: 'smooth',
          });
        }, 100);
      }
    });
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    const images = document.querySelectorAll('.fade-in-image');
    images.forEach((image) => observer.observe(image));

    window.scrollTo(0, window.innerHeight / 2);
  }

  scrollIntoView(): void {
    const target = this.imageSection.nativeElement;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
