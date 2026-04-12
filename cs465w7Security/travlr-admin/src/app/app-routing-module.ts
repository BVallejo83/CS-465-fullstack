import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TripList } from './trip-list/trip-list';
import{ LoginComponent } from './login/login';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'trips', component: TripList}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
