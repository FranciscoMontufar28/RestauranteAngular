import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  loadMenu(): Observable<Menu[]> {
    return timer(500)
    .pipe(
      map(() => {
        return [
          // tslint:disable-next-line:max-line-length
          {chef: 'Francisco', date: new Date(), img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk1ObF-_9V_aXbZCOMH3n7U6VxR1CGFNIQXx5Dg0vUP0Ia1cXUVw'},
          // tslint:disable-next-line:max-line-length
          {chef: 'Felipe', date: new Date(), img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk1ObF-_9V_aXbZCOMH3n7U6VxR1CGFNIQXx5Dg0vUP0Ia1cXUVw'},
          // tslint:disable-next-line:max-line-length
          {chef: 'Jhovanny', date: new Date(), img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk1ObF-_9V_aXbZCOMH3n7U6VxR1CGFNIQXx5Dg0vUP0Ia1cXUVw'},
          {chef: 'Carolina', date: new Date(), img: ''},
          {chef: 'Angie', date: new Date(), img: ''},
          {chef: 'Lina', date: new Date(), img: ''},
        ];
      })
    );
  }
}

export class Menu {
  constructor(public img: string,
              public chef: string,
              public date: Date) { }
}

