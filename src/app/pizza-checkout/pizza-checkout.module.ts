import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {PizzaCheckoutComponent} from './pizza-checkout.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [PizzaCheckoutComponent],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule
  ],
  providers: []
})
export class PizzaCheckoutModule {
}
