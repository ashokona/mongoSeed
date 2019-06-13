import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  isExpanded: Boolean = true;

  @Input('isSideNavExpanded')
  set toggle(value) {
    this.isExpanded = value;
  }
  @Output() toggleSideNav: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private navService: NavService
  ) { }

  ngOnInit() {
    // this.navService.isSideNavExpanded.subscribe(
    //   res => this.isExpanded = res,
    //   err => this.isExpanded = true
    // );
  }

  toogleSideNav() {
    this.isExpanded = !this.isExpanded;
    this.toggleSideNav.emit(this.isExpanded);
  }

}
