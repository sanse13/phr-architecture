import { Component } from '@angular/core';
import { provideIcons, NgIcon } from '@ng-icons/core';
import { bootstrapList } from '@ng-icons/bootstrap-icons';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIcon, SidebarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  viewProviders: [provideIcons({ bootstrapList })],
})
export class NavbarComponent {
  sideBarOpen = false;

  toggleSideBar(): void {
    this.sideBarOpen = !this.sideBarOpen;
  }

  handleEventEmitter(event: boolean): void {
    this.sideBarOpen = event;
  }
}
