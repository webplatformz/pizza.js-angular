import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PizzaSelectionComponent } from './pizza-selection/pizza-selection.component';
import { PizzaPreviewComponent } from './pizza-preview/pizza-preview.component';
import { ShoppingCartComponent } from './pizza-preview/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaSelectionComponent,
    PizzaPreviewComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }