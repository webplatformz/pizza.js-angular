import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {PizzaSelectionComponent} from './pizza-page/pizza-selection/pizza-selection.component';
import {PizzaPreviewComponent} from './pizza-page/pizza-preview/pizza-preview.component';
import {ShoppingCartComponent} from './pizza-page/pizza-preview/shopping-cart/shopping-cart.component';
import {PizzaService} from 'app/pizza-page/pizza-selection/pizza.service';
import {PizzaListComponent} from './pizza-page/pizza-selection/pizza-list/pizza-list.component';
import {IngredientListComponent} from './pizza-page/pizza-selection/ingredient-list/ingredient-list.component';
import {PizzaPageComponent} from './pizza-page/pizza-page.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    PizzaSelectionComponent,
    PizzaPreviewComponent,
    ShoppingCartComponent,
    PizzaListComponent,
    IngredientListComponent,
    PizzaPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
