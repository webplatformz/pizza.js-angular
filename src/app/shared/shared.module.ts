import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ShoppingCartComponent
  ],
  exports: [
    ShoppingCartComponent
  ]
})
export class SharedModule {
}
