import {Component, OnInit} from '@angular/core';
import {PizzaSelection} from '../typings/pizza-selection';

@Component({
  selector: 'app-pizza-page',
  templateUrl: './pizza-page.component.html',
  styleUrls: ['./pizza-page.component.css']
})
export class PizzaPageComponent {

  pizzaSelection: PizzaSelection;

  onChangePizzaConfiguration(pizzaSelection: PizzaSelection) {
    this.pizzaSelection = pizzaSelection;
  }

}
