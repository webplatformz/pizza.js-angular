import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PizzaSelectionComponent } from './pizza-selection/pizza-selection.component';
import { PizzaPreviewComponent } from './pizza-preview/pizza-preview.component';
import { ShoppingCartComponent } from './pizza-preview/shopping-cart/shopping-cart.component';
import { PizzaService } from 'app/pizza-selection/pizza.service';
import { PizzaListComponent } from './pizza-selection/pizza-list/pizza-list.component';
import { IngredientListComponent } from './pizza-selection/ingredient-list/ingredient-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaSelectionComponent,
    PizzaPreviewComponent,
    ShoppingCartComponent,
    PizzaListComponent,
    IngredientListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
