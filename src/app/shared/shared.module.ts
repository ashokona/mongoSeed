import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TopNavComponent, SideNavComponent]
})
export class SharedModule { }
