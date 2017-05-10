import {Ingredient} from './ingredient';
import {Pizza} from './pizza';

export interface PizzaSelection {
  pizza: Pizza;
  additionalIngredients: Ingredient[];
}
