import {Injectable} from '@angular/core';
import {PizzaSelection} from 'app/typings/pizza-selection';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ShoppingCartService {

  private selectionsSource = new BehaviorSubject<PizzaSelection[]>([]);
  selections$ = this.selectionsSource.asObservable();

  constructor() {
  }

  public addPizzaSelection(pizzaSelection: PizzaSelection) {
    const currentSelections: PizzaSelection[] = this.selectionsSource.getValue();
    this.selectionsSource.next([...currentSelections, pizzaSelection]);
  }
}
