import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {RestaurantData} from '../../assets/data/restaurant-name';

@Injectable()
export class RestaurantService {

  constructor() {
  }

  getDetails(): Observable<any> {
    return of(RestaurantData);
  }

  getRestaurantDeatils(id: number): Observable<any> {
    return of(RestaurantData.find(hero => hero.id === id));
  }
}
