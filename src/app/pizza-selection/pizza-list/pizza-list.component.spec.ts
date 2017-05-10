import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PizzaListComponent} from './pizza-list.component';
import {By} from '@angular/platform-browser';

describe('PizzaListComponent', () => {
  let component: PizzaListComponent;
  let fixture: ComponentFixture<PizzaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaListComponent);
    component = fixture.componentInstance;

    component.pizzas = [{
      name: 'Margeritha',
      ingredients: ['Mozarella'],
      price: 12.0
    }, {
      name: 'Prosciutto',
      ingredients: ['Mozarella', 'Schinken'],
      price: 14.0
    }];
    component.selectedPizza = component.pizzas[1];
    fixture.detectChanges();
  });

  it('should render two pizza boxes', () => {
    const pizzaTiles = fixture.debugElement.queryAll(By.css('.pizza-tile'));

    expect(pizzaTiles.length).toBe(2);
    expect(pizzaTiles[1].query(By.css('h3')).nativeElement.textContent).toBe('Prosciutto');
  });


  it('should hightlight the selected pizza', () => {
    const selectedPizzaTiles = fixture.debugElement.queryAll(By.css('.pizza-tile .pizza-tile--selected'));

    expect(selectedPizzaTiles.length).toBe(1);
    expect(selectedPizzaTiles[0].query(By.css('h3')).nativeElement.textContent).toBe('Prosciutto');
  });
});
