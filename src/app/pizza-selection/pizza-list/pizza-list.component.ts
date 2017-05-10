import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pizza} from '../../typings/pizza';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  @Input()
  pizzas: Pizza[] = [];

  @Input()
  selectedPizza: Pizza;

  @Output()
  onSelectPizza = new EventEmitter<Pizza>();

  constructor() {
  }


  getPizzaAbbreviation(pizzaName: string) {
    return pizzaName.split(' ').map(n => n[0]).join('');
  }

  ngOnInit() {
  }

}
