import {Component, OnInit} from '@angular/core';
import {PizzaSelection} from '../typings/pizza-selection';

@Component({
  selector: 'app-pizza-counter',
  templateUrl: './pizza-counter.component.html',
  styleUrls: ['./pizza-counter.component.css']
})
export class PizzaCounterComponent {

  pizzaSelection: PizzaSelection;

  onChangePizzaConfiguration(pizzaSelection: PizzaSelection) {
    this.pizzaSelection = pizzaSelection;
  }

}
