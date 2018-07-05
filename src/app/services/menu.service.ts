import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

    data: Menu[] = [];

  constructor() { }

 /* loadMenu(): Observable<Menu[]> {
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
          // tslint:disable-next-line:max-line-length
          {chef: 'Carolina', date: new Date(), img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk1ObF-_9V_aXbZCOMH3n7U6VxR1CGFNIQXx5Dg0vUP0Ia1cXUVw'},
          // tslint:disable-next-line:max-line-length
          {chef: 'Angie', date: new Date(), img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk1ObF-_9V_aXbZCOMH3n7U6VxR1CGFNIQXx5Dg0vUP0Ia1cXUVw'},
          // tslint:disable-next-line:max-line-length
          {chef: 'Lina', date: new Date(), img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk1ObF-_9V_aXbZCOMH3n7U6VxR1CGFNIQXx5Dg0vUP0Ia1cXUVw'},
        ];
      })
    );
  }
}*/

loadMenu(): Observable<Menu[]> {
  return timer(500)
  .pipe(
    map(() => {

      if (this.data.length === 0) {

        this.data = [
          // tslint:disable-next-line:max-line-length
          {chef: 'Francisco', date: new Date(), img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk1ObF-_9V_aXbZCOMH3n7U6VxR1CGFNIQXx5Dg0vUP0Ia1cXUVw'},
          // tslint:disable-next-line:max-line-length
          {chef: 'Felipe', date: new Date(), img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk1ObF-_9V_aXbZCOMH3n7U6VxR1CGFNIQXx5Dg0vUP0Ia1cXUVw'},
          // tslint:disable-next-line:max-line-length
          {chef: 'Jhovanny', date: new Date(), img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk1ObF-_9V_aXbZCOMH3n7U6VxR1CGFNIQXx5Dg0vUP0Ia1cXUVw'},
          // tslint:disable-next-line:max-line-length
          {chef: 'Carolina', date: new Date(), img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk1ObF-_9V_aXbZCOMH3n7U6VxR1CGFNIQXx5Dg0vUP0Ia1cXUVw'},
          // tslint:disable-next-line:max-line-length
          {chef: 'Angie', date: new Date(), img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk1ObF-_9V_aXbZCOMH3n7U6VxR1CGFNIQXx5Dg0vUP0Ia1cXUVw'},
          // tslint:disable-next-line:max-line-length
          {chef: 'Lina', date: new Date(), img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk1ObF-_9V_aXbZCOMH3n7U6VxR1CGFNIQXx5Dg0vUP0Ia1cXUVw'},
        ];
      }
      return this.data;
    })
  );
}

addMenu(menu: Menu) {
  this.data.splice(0, 0, menu);
}
}



export class Menu {
  constructor(public img: string,
              public chef: string,
              public date: Date) { }
}

