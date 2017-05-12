import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { PizzaCheckoutComponent } from './pizza-checkout.component';

@NgModule({
  declarations: [PizzaCheckoutComponent],
  imports: [BrowserModule, FormsModule],
  providers: []
})
export class PizzaCheckoutModule {
}
