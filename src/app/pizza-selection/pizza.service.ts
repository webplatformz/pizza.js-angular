import {Injectable} from '@angular/core';
import {Pizza} from '../model/pizza';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PizzaService {

  constructor(private http: Http) {
  }

  getPizzas(): Observable<Pizza[]> {
    return this.http.get('http://localhost:3001/pizzas').map(response => response.json());
  }

}
