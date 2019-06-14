import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input() navItems;
  @Input() isExpanded: Boolean = false;
  @Output() itemClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onItemClicked(route) {
    this.itemClicked.emit(route);
  }

  onToggle(value) {
    this.toggle.emit(value);
  }

}
