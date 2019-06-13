import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SideNavListItemComponent } from './components/side-nav/side-nav-list-item/side-nav-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  exports: [
    TopNavComponent,
    SideNavComponent,
    SideNavListItemComponent
  ],
  declarations: [
    TopNavComponent,
    SideNavComponent,
    SideNavListItemComponent
  ]
})
export class SharedModule { }
