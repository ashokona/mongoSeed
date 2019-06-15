import { Component, HostBinding, Input, EventEmitter, Output } from '@angular/core';
// import {NavItem} from '../nav-item';
import { Router } from '@angular/router';
import { NavService } from 'src/app/shared/services/nav.service';
// import {NavService} from '../nav.service';

@Component({
  selector: 'app-side-nav-list-item',
  templateUrl: './side-nav-list-item.component.html',
  styleUrls: ['./side-nav-list-item.component.scss']
})
export class SideNavListItemComponent {
  expanded: boolean;
  sideNavExpanded: boolean = false;
  // @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: any;
  @Input() depth: number;
  @Input('isExpanded')
  set sideNav(v) {
    this.sideNavExpanded = v;
  }

  @Output() itemClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    public router: Router,
    private navService: NavService
  ) {
  if (this.depth === undefined) {
    this.depth = 0;
  }

    this.navService.isSideNavExpanded.subscribe(
      res => this.sideNavExpanded = res,
      err => this.sideNavExpanded = true
    );
  }

  onItemSelected(item: any) {
    if (!item.children || !item.children.length) {
      // this.itemClicked.emit('item.route');
      this.router.navigate([item.route]);
      // this.navService.closeNav();
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
      // this.sideNavExpanded = true;
      this.itemClicked.emit('item.route');
      this.toggle.emit(true);
      // this.navService.toggleSideNav(true);
    }
  }
}
