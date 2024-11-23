import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
})
export class ProgressBarComponent implements OnInit {
  barWidth = input.required<number>();
  currentWidth = 0;

  ngOnInit(): void {
    this.animateProgress();
  }

  animateProgress(): void {
    const step = 2;
    const interval = 20;

    const intervalId = setInterval(() => {
      if (this.currentWidth < this.barWidth()) {
        this.currentWidth += step;
      } else {
        clearInterval(intervalId);
      }
    }, interval);
  }
}
