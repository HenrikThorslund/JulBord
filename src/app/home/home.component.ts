import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation';
import { ReservationService } from '../reservation.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  reservations:Reservation[]=[];

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.getReservations();
  }

  getReservations(): void{
    this.reservationService.getReservations()
    .subscribe(reservations=>this.reservations=reservations.slice(1,5));
  }

}
