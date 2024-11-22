import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private readonly sideBarStatus = new BehaviorSubject<boolean>(false);
  constructor() {}

  getSideBarStatus() {
    return this.sideBarStatus.asObservable();
  }

  setSideBarStatus(status: boolean) {
    this.sideBarStatus.next(status);
  }
}
