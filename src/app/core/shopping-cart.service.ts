import { Injectable } from '@angular/core';
import { PizzaSelection } from 'app/typings/pizza-selection';

@Injectable()
export class ShoppingCartService {

  private selections: PizzaSelection[] = [];

  constructor() { }

  public addPizzaSelection(pizzaSelection: PizzaSelection) {
    this.selections.push(pizzaSelection);
  }

  public get pizzaSelections() {
    return this.selections;
  }

}
