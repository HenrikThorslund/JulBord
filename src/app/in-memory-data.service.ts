import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Reservation } from './reservation';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const reservations = [
      { id: 1, name: 'Henrik',date:"2021-12-04",amountReservd: 2 },
      { id: 2, name: 'Erik',date:"2021-12-04",amountReservd: 3 },
      { id: 3, name: 'Fia',date:"2021-12-08",amountReservd: 2 }
    ];
    return {reservations};
  }

 

  // Overrides the genId method to ensure that a hero always has an id.
  // If the reservation array is empty,
  // the method below returns the initial number (11).
  // if the reservation array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Reservation[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}