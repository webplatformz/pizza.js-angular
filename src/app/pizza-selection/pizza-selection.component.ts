import {Ingredient} from '../typings/ingredient';
import {Component} from '@angular/core';
import {Pizza} from 'app/typings/pizza';
import {PizzaService} from 'app/pizza-selection/pizza.service';

@Component({
  selector: 'app-pizza-selection',
  templateUrl: './pizza-selection.component.html',
  styleUrls: ['./pizza-selection.component.css']
})
export class PizzaSelectionComponent {

  pizzas: Pizza[] = [];
  selectedPizza: Pizza;
  ingredients: Ingredient[] = [];
  selectedIngredients: Ingredient[] = [];

  pizzaPrice = 0;

  constructor(private pizzaService: PizzaService) {
    this.pizzaService.getPizzas().subscribe(pizzas => {
      this.pizzas = pizzas;
      this.onSelectPizza(this.pizzas[0]);
    });

    this.pizzaService.getIngredients().subscribe(ingredients => this.ingredients = ingredients);
  }

  onSelectPizza(pizza: Pizza) {
    this.selectedPizza = pizza;
    this.updatePizzaPrice();
  }

  onAddIngredient(ingredient: Ingredient) {
    this.selectedIngredients.push(ingredient);
    this.updatePizzaPrice();
  }

  onRemoveIngredient(removedIngredient: Ingredient) {
    this.selectedIngredients = this.selectedIngredients
      .filter(ingredient => ingredient.name !== removedIngredient.name);
    this.updatePizzaPrice();
  }

  updatePizzaPrice() {
    this.pizzaPrice = this.selectedPizza.price + this.selectedIngredients
        .map(ingredient => ingredient.price)
        .reduce((total, price) => total + price, 0);
  }
}
