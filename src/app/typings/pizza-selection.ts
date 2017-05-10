import {Ingredient} from './ingredient';
import {Pizza} from './pizza';

export class PizzaSelection {
  pizza: Pizza;
  additionalIngredients: Ingredient[] = [];

  getPrice(): number {
    if (!this.pizza) {
      return 0;
    }
    return this.pizza.price + this.additionalIngredients
        .map(ingredient => ingredient.price)
        .reduce((total, price) => total + price, 0);
  }
}
