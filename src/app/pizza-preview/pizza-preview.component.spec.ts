import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaPreviewComponent } from './pizza-preview.component';
import { ShoppingCartComponent } from "app/pizza-preview/shopping-cart/shopping-cart.component";

describe('PizzaPreviewComponent', () => {
  let component: PizzaPreviewComponent;
  let fixture: ComponentFixture<PizzaPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaPreviewComponent, ShoppingCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
