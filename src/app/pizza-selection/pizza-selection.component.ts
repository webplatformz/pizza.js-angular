import {Component, OnInit} from '@angular/core';
import {Pizza} from '../model/pizza';

@Component({
  selector: 'app-pizza-selection',
  templateUrl: './pizza-selection.component.html',
  styleUrls: ['./pizza-selection.component.css']
})
export class PizzaSelectionComponent implements OnInit {
  pizzas: Pizza[];

  constructor() {
    this.pizzas = [
      {name: 'Margherita', price: 12.90, ingredients: ['Tomaten', 'Mozzarella', 'Oregano']},
      {name: 'Prosciutto et Funghi', price: 14.00, ingredients: ['Tomate', 'Mozzarella', 'Oregano', 'Schinken', 'Pilze']},
      {name: 'Napoli', price: 18.00, ingredients: ['Tomaten', 'Mozzarella', 'Sardellen', 'Kapern', 'Oregano']}
    ];

    // TODO: add ingredients here as well so they don't need to manually copy everything
  }

  ngOnInit() {
  }

}
