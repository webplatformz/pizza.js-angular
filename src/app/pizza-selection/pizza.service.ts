import { Ingredient } from 'app/typings/ingredient';
import { Pizza } from '../typings/pizza';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PizzaService {

  private baseUrl = 'http://localhost:3001';

  constructor(private http: Http) { }

  public getPizzas(): Observable<Pizza[]> {
    return this.http.get(this.baseUrl + '/pizzas')
      .map(this.extractData)
      .catch(() => []);
  }

  public getIngredients(): Observable<Ingredient[]> {
    return this.http.get(this.baseUrl + '/ingredients')
      .map(this.extractData)
      .catch(() => []);
  }

  private extractData(res: Response) {
    return res.json();
  }

}
