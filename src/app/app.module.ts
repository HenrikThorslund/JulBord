import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'; 

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ReservationSearchComponent } from './reservation-search/reservation-search.component';
import { MessagesComponent } from './messages/messages.component';
import { AboutComponent } from './about/about.component';





@NgModule({
  
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ReservationsComponent,
    ReservationDetailComponent,
    MessagesComponent,
    ReservationSearchComponent,
    AboutComponent
    
  ],

  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
