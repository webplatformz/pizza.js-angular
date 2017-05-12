import {PizzaCounterComponent} from './pizza-counter.component';
import {HttpModule} from '@angular/http';
import {PizzaService} from './pizza-selection/pizza.service';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {IngredientListComponent} from './pizza-selection/ingredient-list/ingredient-list.component';
import {PizzaListComponent} from './pizza-selection/pizza-list/pizza-list.component';
import {PizzaPreviewComponent} from './pizza-preview/pizza-preview.component';
import {PizzaSelectionComponent} from './pizza-selection/pizza-selection.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    PizzaSelectionComponent,
    PizzaPreviewComponent,
    PizzaListComponent,
    IngredientListComponent,
    PizzaCounterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule
  ],
  providers: [PizzaService]
})
export class PizzaCounterModule {
}
