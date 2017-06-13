import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PizzaPreviewComponent } from './pizza-preview/pizza-preview.component';
import { PizzaSelectionComponent } from './pizza-selection/pizza-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaPreviewComponent,
    PizzaSelectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
