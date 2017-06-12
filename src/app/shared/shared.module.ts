import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {RouterModule} from '@angular/router';
import { PizzaInputFieldComponent } from './pizza-input-field/pizza-input-field.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    ShoppingCartComponent,
    PizzaInputFieldComponent
  ],
  exports: [
    ShoppingCartComponent,
    PizzaInputFieldComponent
  ]
})
export class SharedModule {
}
