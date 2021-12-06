import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';
import { AboutComponent } from './about/about.component';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about',component:AboutComponent},
  { path: 'detail/:id', component: ReservationDetailComponent },
  { path: 'reservations', component: ReservationsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
