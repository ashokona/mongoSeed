import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Test1Component } from './test1/test1.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  {
    path: 'security', children: [
      {
        path: 'test', component: Test1Component
      }
    ]
  },
  {
    path: 'cost', children: [
      {
        path: 'spends', children: [
          { path: 'test', component: TestComponent }
        ]
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
