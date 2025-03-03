import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollPositionService {
  private readonly scrollPosition = new BehaviorSubject<number>(0);

  constructor() {}

  getScrollPosition(): number {
    return this.scrollPosition.getValue();
  }

  setScrollPosition(position: number): void {
    this.scrollPosition.next(position);
  }
}
