import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapChevronDown } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-pop-over',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './pop-over.component.html',
  styleUrl: './pop-over.component.scss',
  viewProviders: [provideIcons({ bootstrapChevronDown })],
})
export class PopOverComponent {
  showPopover = false;
  popoverTop = 0;
  popoverLeft = 4;

  @ViewChild('trigger', { static: true }) triggerElement!: ElementRef;
  @ViewChild('popover', { static: true }) popoverElement!: ElementRef;

  calculatePopoverPosition(event: MouseEvent): void {
    const triggerRect = (event.target as HTMLElement).getBoundingClientRect();
    this.popoverTop = triggerRect.bottom + window.scrollY + 10;
    this.popoverLeft =
      triggerRect.left + window.scrollX + triggerRect.width / 2 - 128;
  }
}
