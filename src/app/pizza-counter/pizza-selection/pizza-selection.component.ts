import {Ingredient} from '../../typings/ingredient';
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Pizza} from 'app/typings/pizza';
import {PizzaService} from 'app/pizza-counter/pizza-selection/pizza.service';
import {PizzaSelection} from '../../typings/pizza-selection';
import {ShoppingCartService} from '../../core/shopping-cart.service';

@Component({
  selector: 'app-pizza-selection',
  templateUrl: './pizza-selection.component.html',
  styleUrls: ['./pizza-selection.component.css']
})
export class PizzaSelectionComponent implements OnInit {


  @Output()
  onChangePizzaConfiguration = new EventEmitter<PizzaSelection>();

  pizzas: Pizza[] = [];
  ingredients: Ingredient[] = [];

  pizzaSelection: PizzaSelection = new PizzaSelection();

  constructor(private pizzaService: PizzaService, private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit(): void {
    this.pizzaService.getPizzas().subscribe(pizzas => {
      this.pizzas = pizzas;
      this.onSelectPizza(this.pizzas[0]);
    });

    this.pizzaService.getIngredients().subscribe(ingredients => this.ingredients = ingredients);
  }

  onSelectPizza(pizza: Pizza) {
    this.pizzaSelection.pizza = pizza;
    this.emitPizzaConfiguration();
  }

  onAddIngredient(ingredient: Ingredient) {
    this.pizzaSelection.additionalIngredients.push(ingredient);
    this.emitPizzaConfiguration();
  }

  onRemoveIngredient(removedIngredient: Ingredient) {
    this.pizzaSelection.additionalIngredients = this.pizzaSelection.additionalIngredients
      .filter(ingredient => ingredient.name !== removedIngredient.name);
    this.emitPizzaConfiguration();
  }

  private emitPizzaConfiguration() {
    this.onChangePizzaConfiguration.emit(Object.assign({}, this.pizzaSelection));
  }

  onAddPizzaToShoppingCart() {
    this.shoppingCartService.addPizzaSelection(this.pizzaSelection);
    this.pizzaSelection = new PizzaSelection();
    this.onSelectPizza(this.pizzas[0]);
  }
}
