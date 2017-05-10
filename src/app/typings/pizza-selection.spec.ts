import {PizzaSelection} from './pizza-selection';

fdescribe('PizzaSelection', () => {
  it('should calculate pizza price without ingredients', () => {
    const pizzaSelection = new PizzaSelection();
    pizzaSelection.pizza = {
      name: 'Margeritha',
      ingredients: [],
      price: 12.3
    };

    const actual = pizzaSelection.getPrice();

    expect(actual).toBe(12.3);
  });

  it('should calculate pizza price with two additonal ingredients', () => {
    const pizzaSelection = new PizzaSelection();
    pizzaSelection.pizza = {
      name: 'Margeritha',
      ingredients: [],
      price: 12.0
    };
    pizzaSelection.additionalIngredients = [{
      name: 'Schinken',
      price: 1.0
    }, {
      name: 'Extra Mozarella',
      price: 2.0
    }];

    const actual = pizzaSelection.getPrice();

    expect(actual).toBe(15);
  });

  it('should return 0, if no pizza is selected', () => {
    const pizzaSelection = new PizzaSelection();

    pizzaSelection.additionalIngredients = [{
      name: 'Schinken',
      price: 1.0
    }];

    const actual = pizzaSelection.getPrice();

    expect(actual).toBe(0);
  });
});
