import {Component, OnInit} from '@angular/core';
import {Pizza} from '../model/pizza';
const backend = require('../backend.json');

@Component({
  selector: 'app-pizza-selection',
  templateUrl: './pizza-selection.component.html',
  styleUrls: ['./pizza-selection.component.css']
})
export class PizzaSelectionComponent implements OnInit {
  pizzas: Pizza[];

  constructor() {
  }

  ngOnInit() {
    this.pizzas = backend.pizzas;
  }

}
