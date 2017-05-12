import { RouterModule } from '@angular/router';
import { PizzaCounterComponent } from './pizza-counter.component';
import { HttpModule } from '@angular/http';
import { PizzaService } from './pizza-selection/pizza.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { IngredientListComponent } from './pizza-selection/ingredient-list/ingredient-list.component';
import { PizzaListComponent } from './pizza-selection/pizza-list/pizza-list.component';
import { ShoppingCartComponent } from './pizza-preview/shopping-cart/shopping-cart.component';
import { PizzaPreviewComponent } from './pizza-preview/pizza-preview.component';
import { PizzaSelectionComponent } from './pizza-selection/pizza-selection.component';

@NgModule({
  declarations: [
    PizzaSelectionComponent,
    PizzaPreviewComponent,
    ShoppingCartComponent,
    PizzaListComponent,
    IngredientListComponent,
    PizzaCounterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule
  ],
  providers: [PizzaService]
})
export class PizzaCounterModule {
}
