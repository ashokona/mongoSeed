import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  isSideNavExpanded = new BehaviorSubject(false);

  constructor() { }

  public toggleSideNav(value) {
    this.isSideNavExpanded.next(value);
  }
}
