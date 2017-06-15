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
    this.ingredients = this.loadIngredients();
  }

  ngOnInit() {
    this.pizzaService.getPizzas().subscribe(pizzas => {
      this.pizzas = pizzas;
      this.selectedPizza = this.pizzas[0];
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
