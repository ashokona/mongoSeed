import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

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
  @Output() widthChange: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('sideNavContainer') sideNavContainerRef: ElementRef;

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() { }

  onItemClicked(route) {
    this.itemClicked.emit(route);
  }

  onToggle(value) {
    this.toggle.emit(value);
  }

  ngAfterViewChecked() {
    // console.log(this.sideNavContainerRef.nativeElement.offsetWidth);
  }
}
