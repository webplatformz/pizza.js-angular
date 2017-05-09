import { Component } from '@angular/core';

import { Pizza } from "app/typings/pizza";
import { Ingredient } from "app/typings/ingredient";

@Component({
  selector: 'app-pizza-selection',
  templateUrl: './pizza-selection.component.html',
  styleUrls: ['./pizza-selection.component.css']
})
export class PizzaSelectionComponent {

  pizzas: Pizza[] = [];
  ingredients: Ingredient[] = [];

  pizzaPrice: number = 0;

  constructor() { 
    this.pizzas = [
      {name: 'Prosciutto', price: 4.95, ingredients: ['Mozzarella', 'Tomate']},
      {name: 'Prosciutto1', price: 4.95, ingredients: ['Mozzarella', 'Tomate']},
      {name: 'Prosciutto2', price: 4.95, ingredients: ['Mozzarella', 'Tomate', 'Oregano', 'Pilze', 'Noch mehr Pilze']}
    ]

    this.ingredients = [
      {name: 'Schinken', price: 0.50},
      {name: 'Pilze', price: 0.50},
      {name: 'Extra Käse', price: 0.50},
      {name: 'Ananas', price: 0.50}
    ]
  }
}
