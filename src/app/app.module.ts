import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PizzaPreviewComponent } from './pizza-preview/pizza-preview.component';
import { PizzaSelectionComponent } from './pizza-selection/pizza-selection.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AppCurrencyPipe } from './pipes/app-currency.pipe';
import {PizzaService} from './pizza-selection/pizza.service';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    PizzaPreviewComponent,
    PizzaSelectionComponent,
    ShoppingCartComponent,
    AppCurrencyPipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
