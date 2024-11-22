import {
  Component,
  DestroyRef,
  ElementRef,
  EventEmitter,
  HostListener,
  inject,
  input,
  Output,
  ViewChild,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  bootstrapHouse,
  bootstrapPersonVcard,
} from '@ng-icons/bootstrap-icons';
import { RouterLink } from '@angular/router';
import { SidebarService } from '../sidebar.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgIcon, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  viewProviders: [provideIcons({ bootstrapHouse, bootstrapPersonVcard })],
})
export class SidebarComponent {
  isSideBarOpen = false;
  @ViewChild('sidebar') sidebar!: ElementRef;

  constructor(private readonly sideBarService: SidebarService) {
    this.sideBarService
      .getSideBarStatus()
      .pipe(takeUntilDestroyed())
      .subscribe((status) => {
        if (!status) {
          if (this.sidebar) {
            const sidebarElement = this.sidebar.nativeElement;
            sidebarElement.style.transition = 'transform 0.5s ease-in-out';
            sidebarElement.style.transform = 'translateX(100%)';
          }
        }
      });
  }

  handleSideBarCloseButton(): void {
    this.isSideBarOpen = !this.isSideBarOpen;
    const sidebarElement = this.sidebar.nativeElement;

    if (this.isSideBarOpen) {
      sidebarElement.style.transition = 'transform 0.5s ease-in-out';
      sidebarElement.style.transform = 'translateX(0)';
    } else {
      sidebarElement.style.transition = 'transform 0.5s ease-in-out';
      sidebarElement.style.transform = 'translateX(100%)';
    }
  }
}
