import {Component, OnInit} from '@angular/core';
import {Pizza} from '../model/pizza';
import {Ingredient} from '../model/ingredient';

@Component({
  selector: 'app-pizza-selection',
  templateUrl: './pizza-selection.component.html',
  styleUrls: ['./pizza-selection.component.css']
})
export class PizzaSelectionComponent implements OnInit {
  pizzas: Pizza[];
  ingredients: Ingredient[];
  selectedPizza: Pizza;

  constructor() {
    this.pizzas = this.loadPizzas();
    this.ingredients = this.loadIngredients();
    this.selectedPizza = this.pizzas[0];
  }

  ngOnInit() {
  }

  onSelectPizza(pizza: Pizza) {
    this.selectedPizza = pizza;
  }

  private loadPizzas() {
    return [
      {name: 'Margherita', price: 12.90, ingredients: ['Tomaten', 'Mozzarella', 'Oregano']},
      {
        name: 'Prosciutto et Funghi',
        price: 14.00,
        ingredients: ['Tomate', 'Mozzarella', 'Oregano', 'Schinken', 'Pilze']
      },
      {name: 'Napoli', price: 18.00, ingredients: ['Tomaten', 'Mozzarella', 'Sardellen', 'Kapern', 'Oregano']}
    ];
  }

  private loadIngredients() {
    return [
      {
        'name': 'Salami',
        'price': 1.70
      },
      {
        'name': 'Schinken',
        'price': 1.20
      },
      {
        'name': 'Mozzarella',
        'price': 1.50
      },
      {
        'name': 'Artischocken',
        'price': 1.80
      },
      {
        'name': 'Ananas',
        'price': 1.40
      },
      {
        'name': 'Kapern',
        'price': 1.00
      },
      {
        'name': 'Sardellen',
        'price': 3.50
      },
      {
        'name': 'Büffelmozzarella',
        'price': 2.10
      },
      {
        'name': 'Cherry-Tomaten',
        'price': 1.60
      },
      {
        'name': 'Gruyère',
        'price': 0.80
      },
      {
        'name': 'Rucola',
        'price': 2.50
      }];
  }

}
