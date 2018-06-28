import { Observable, timer } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeekService {

  constructor() { }

  loadWeek(): Observable<Day[]> {
    return timer(500)
    .pipe(
      map(() => [
        {chef: 'Francisco', menu: ['Cordon Blue', 'Steak pimienta', 'Chicharon']},
        {chef: 'Daniela', menu: ['Menu 2', 'Menu 3', 'Menu 4']},
        {chef: 'Felipe', menu: ['Menu 5', 'Menu 6']},
        {chef: 'Andres', menu: ['Menu 7']},
        {chef: 'Angie', menu: ['Menu 8', 'Menu 9', 'Menu 10']},
      ])
    );
  }

}

export class Day {
  constructor(public chef: string, public menu: string[]) {}

}
