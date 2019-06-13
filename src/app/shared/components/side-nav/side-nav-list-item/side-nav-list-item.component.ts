import {Component, HostBinding, Input} from '@angular/core';
// import {NavItem} from '../nav-item';
import {Router} from '@angular/router';
// import {NavService} from '../nav.service';

@Component({
  selector: 'app-side-nav-list-item',
  templateUrl: './side-nav-list-item.component.html',
  styleUrls: ['./side-nav-list-item.component.scss']
})
export class SideNavListItemComponent {
  expanded: boolean;
  // @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: any;
  @Input() depth: number;

  constructor(
    
              public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  onItemSelected(item: any) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
      // this.navService.closeNav();
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }
}
