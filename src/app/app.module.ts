import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PizzaPreviewComponent } from './pizza-preview/pizza-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaPreviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
