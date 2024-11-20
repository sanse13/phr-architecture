import {
  Component,
  ElementRef,
  EventEmitter,
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

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass, NgIcon, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  viewProviders: [provideIcons({ bootstrapHouse, bootstrapPersonVcard })],
})
export class SidebarComponent {
  isSideBarOpen = false;
  @ViewChild('sidebar') sidebar!: ElementRef;

  handleSideBarCloseButton(): void {
    this.isSideBarOpen = !this.isSideBarOpen;
    const sidebarElement = this.sidebar.nativeElement;

    if (this.isSideBarOpen) {
      // Muestra la barra lateral con una transición
      sidebarElement.style.transition = 'transform 0.5s ease-in-out';
      sidebarElement.style.transform = 'translateX(0)';
    } else {
      // Oculta la barra lateral con una transición
      sidebarElement.style.transition = 'transform 0.5s ease-in-out';
      sidebarElement.style.transform = 'translateX(100%)';
    }
  }
}
