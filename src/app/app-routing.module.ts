import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Test1Component } from './test1/test1.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  // { path: 'auth', loadChildren: './authentication/authentication.module#AuthenticationModule', canActivate: [NoAuthGuardService] },
  // { path: '', loadChildren: './home/home.module#HomeModule' },
  // { path: '**', redirectTo: '' , pathMatch: 'full'},
  { path: 'test', component: TestComponent },
  { path: 'test1', component: Test1Component }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
