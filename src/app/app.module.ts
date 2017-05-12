import { PizzaCheckoutModule } from './pizza-checkout/pizza-checkout.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {PizzaSelectionComponent} from './pizza-counter/pizza-selection/pizza-selection.component';
import {PizzaPreviewComponent} from './pizza-counter/pizza-preview/pizza-preview.component';
import {ShoppingCartComponent} from './pizza-counter/pizza-preview/shopping-cart/shopping-cart.component';
import {PizzaService} from 'app/pizza-counter/pizza-selection/pizza.service';
import {PizzaListComponent} from './pizza-counter/pizza-selection/pizza-list/pizza-list.component';
import {IngredientListComponent} from './pizza-counter/pizza-selection/ingredient-list/ingredient-list.component';
import {PizzaCounterComponent} from './pizza-counter/pizza-counter.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {PizzaCheckoutComponent} from './pizza-checkout/pizza-checkout.component';

@NgModule({
  declarations: [
    AppComponent,
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
    RouterModule.forRoot(appRoutes, {useHash: true}),
    PizzaCheckoutModule
  ],
  providers: [PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
