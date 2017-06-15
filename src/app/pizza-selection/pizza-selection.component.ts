import {Component, OnInit} from '@angular/core';
import {Pizza} from '../model/pizza';
import {Ingredient} from '../model/ingredient';
import {PizzaService} from './pizza.service';

@Component({
  selector: 'app-pizza-selection',
  templateUrl: './pizza-selection.component.html',
  styleUrls: ['./pizza-selection.component.css']
})
export class PizzaSelectionComponent implements OnInit {
  pizzas: Pizza[];
  ingredients: Ingredient[];
  selectedPizza: Pizza;
  selectedIngredients: Ingredient[] = [];

  constructor(private pizzaService: PizzaService) {
  }

  ngOnInit() {
    this.pizzaService.getPizzas().subscribe(pizzas => {
      this.pizzas = pizzas;
      this.selectedPizza = this.pizzas[0];
    });

    this.pizzaService.getIngredients().subscribe(ingredients => {
      this.ingredients = ingredients;
    });
  }

  onSelectPizza(pizza: Pizza) {
    this.selectedPizza = pizza;
  }

  onSelectIngredient(selectedIngredient: Ingredient, checked: boolean) {
    if (checked) {
      this.selectedIngredients = this.selectedIngredients.concat(selectedIngredient);
    } else {
      this.selectedIngredients = this.selectedIngredients.filter(ingredient => ingredient.name !== selectedIngredient.name);
    }
  }

  getTotalPrice(): number {
    const ingredientsPrice = this.selectedIngredients
      .map(ingredient => ingredient.price)
      .reduce((totalPrice, ingredientPrice) => totalPrice + ingredientPrice, 0);
    const pizzaPrice = this.selectedPizza ? this.selectedPizza.price : 0;
    return pizzaPrice + ingredientsPrice;
  }

}
