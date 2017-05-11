import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PizzaSelectionComponent} from './pizza-selection.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {PizzaService} from './pizza.service';
import createSpy = jasmine.createSpy;
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import createSpyObj = jasmine.createSpyObj;

describe('PizzaSelectionComponent', () => {
  let component: PizzaSelectionComponent;
  let fixture: ComponentFixture<PizzaSelectionComponent>;
  const mockPizzaService = createSpyObj('PizzaService', ['getPizzas', 'getIngredients']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaSelectionComponent],
      providers: [
        {
          provide: PizzaService,
          useValue: mockPizzaService
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaSelectionComponent);
    component = fixture.componentInstance;

    mockPizzaService.getPizzas.and.returnValue(Observable.of([{
      name: 'Margherita',
      ingredients: [],
      price: 12.0
    }]));
    mockPizzaService.getIngredients.and.returnValue(Observable.of([]));

    fixture.detectChanges();
  });

  it('should requests pizzas and ingredients', () => {
    expect(mockPizzaService.getPizzas).toHaveBeenCalled();
    expect(mockPizzaService.getIngredients).toHaveBeenCalled();
  });

  it('should assign the first pizza returned as selection', () => {
    expect(component.pizzas.length).toBe(1);
    expect(component.pizzaSelection.pizza).toBeDefined();
  });
});
