import { ShoppingCartComponent } from 'app/pizza-preview/shopping-cart/shopping-cart.component';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { PizzaPreviewComponent } from './pizza-preview/pizza-preview.component';
import { PizzaSelectionComponent } from './pizza-selection/pizza-selection.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PizzaSelectionComponent,
        PizzaPreviewComponent,
        ShoppingCartComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
