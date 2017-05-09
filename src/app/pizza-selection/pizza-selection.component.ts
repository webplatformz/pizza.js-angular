import { Ingredient } from './../typings/ingredient';
import { Component } from '@angular/core';
import { Pizza } from "app/typings/pizza";
import { PizzaService } from "app/pizza-selection/pizza.service";

@Component({
  selector: 'app-pizza-selection',
  templateUrl: './pizza-selection.component.html',
  styleUrls: ['./pizza-selection.component.css']
})
export class PizzaSelectionComponent {

  pizzas: Pizza[] = [];
  ingredients: Ingredient[] = [];

  selectedPizza: Pizza;
  selectedIngredients: Ingredient[] = [];

  pizzaPrice: number = 0;

  constructor(private pizzaService: PizzaService) { 
    this.pizzaService.getPizzas().subscribe(pizzas => {
      this.pizzas = pizzas
      this.onSelectPizza(this.pizzas[0]);
    });

    this.pizzaService.getIngredients().subscribe(ingredients => this.ingredients = ingredients);
  }

  private loadPizzas() {
    return [
      {name: 'Margaritha', price: 4.95, ingredients: ['Mozzarella', 'Tomate']},
      {name: 'Prosciutto Funghi', price: 5.95, ingredients: ['Mozzarella', 'Tomate', 'Schinken']},
      {name: 'Hawaii', price: 6.95, ingredients: ['Mozzarella', 'Tomate', 'Oregano', 'Pilze', 'Noch mehr Pilze']}
    ];
  }

  private loadIngredients() {
    return [
      {name: 'Schinken', price: 0.50},
      {name: 'Pilze', price: 0.50},
      {name: 'Extra Käse', price: 0.50},
      {name: 'Ananas', price: 0.50}
    ];
  }

  getPizzaAbbreviation(pizzaName: string) {
    return pizzaName.split(' ').map(n => n[0]).join('');
  }

  onSelectPizza(pizza: Pizza) {
    this.selectedPizza = pizza;
    this.updatePizzaPrice();
  }

  onSelectIngredient(selectedIngredient: Ingredient, checked: boolean) {
    this.selectedIngredients = this.selectedIngredients
      .filter(ingredient => ingredient.name != selectedIngredient.name)
      .concat(checked ? [selectedIngredient] : []);
    
    this.updatePizzaPrice();
  }

  updatePizzaPrice() {
    this.pizzaPrice = this.selectedPizza.price + this.selectedIngredients
      .map(ingredient => ingredient.price)
      .reduce((total, price) => total + price, 0);
  }
}
