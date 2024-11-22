import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  HostListener,
  inject,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarService } from './sidebar.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'phr-architecture';

  constructor(private readonly sideBarService: SidebarService) {}

  @HostListener('click', ['$event'])
  onClickInsideSidebar(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const sidebar = document.querySelector('#default-sidebar') as HTMLElement;
    if (sidebar && !sidebar.contains(target)) {
      this.sideBarService.setSideBarStatus(false);
    }
  }
}
