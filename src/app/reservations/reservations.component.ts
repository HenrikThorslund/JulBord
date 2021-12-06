import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation';

import { ReservationService } from '../reservation.service';


@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  reservations: Reservation[] = [];

  dates=["2021-12-11","2021-12-12","2021-12-18"]


  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.getReservation();
  }

  getReservation(): void {
    this.reservationService.getReservations()
    .subscribe(reservations => this.reservations = reservations);
  }

  add(name: string, date: string): void {
    name = name.trim();
    if (!name) { return; }
    this.reservationService.addReservation({ name,date} as Reservation)
      .subscribe(reservation => {
        this.reservations.push(reservation);
      });
  }

  addDate(date: string): void {
    date = date.trim();
    if (!date) { return; }
    this.reservationService.addReservation({ date} as Reservation)
      .subscribe(reservation => {
        this.reservations.push(reservation);
      });
  }

 




  delete(reservation: Reservation): void {
    this.reservations = this.reservations.filter(h => h !== reservation);
    this.reservationService.deleteReservation(reservation.id).subscribe();
  }

}