import {Ingredient} from '../typings/ingredient';
import {Component, EventEmitter, Output} from '@angular/core';
import {Pizza} from 'app/typings/pizza';
import {PizzaService} from 'app/pizza-selection/pizza.service';
import {PizzaSelection} from '../typings/pizza-selection';

@Component({
  selector: 'app-pizza-selection',
  templateUrl: './pizza-selection.component.html',
  styleUrls: ['./pizza-selection.component.css']
})
export class PizzaSelectionComponent {

  @Output()
  onChangePizzaConfiguration = new EventEmitter<PizzaSelection>();

  pizzas: Pizza[] = [];
  ingredients: Ingredient[] = [];

  pizzaSelection: PizzaSelection = {
    pizza: undefined,
    additionalIngredients: []
  };

  pizzaPrice = 0;

  constructor(private pizzaService: PizzaService) {
    this.pizzaService.getPizzas().subscribe(pizzas => {
      this.pizzas = pizzas;
      this.onSelectPizza(this.pizzas[0]);
    });

    this.pizzaService.getIngredients().subscribe(ingredients => this.ingredients = ingredients);
  }

  onSelectPizza(pizza: Pizza) {
    this.pizzaSelection.pizza = pizza;
    this.updatePizzaPrice();
    this.emitPizzaConfiguration();
  }

  onAddIngredient(ingredient: Ingredient) {
    this.pizzaSelection.additionalIngredients.push(ingredient);
    this.updatePizzaPrice();
    this.emitPizzaConfiguration();
  }

  onRemoveIngredient(removedIngredient: Ingredient) {
    this.pizzaSelection.additionalIngredients = this.pizzaSelection.additionalIngredients
      .filter(ingredient => ingredient.name !== removedIngredient.name);
    this.updatePizzaPrice();
    this.emitPizzaConfiguration();
  }

  private updatePizzaPrice() {
    this.pizzaPrice = this.pizzaSelection.pizza.price + this.pizzaSelection.additionalIngredients
        .map(ingredient => ingredient.price)
        .reduce((total, price) => total + price, 0);
  }

  private emitPizzaConfiguration() {
    this.onChangePizzaConfiguration.emit(Object.assign({}, this.pizzaSelection));
  }
}
