import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: 'auth', loadChildren: './authentication/authentication.module#AuthenticationModule', canActivate: [NoAuthGuardService] },
  // { path: '', loadChildren: './home/home.module#HomeModule' },
  // { path: '**', redirectTo: '' , pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
