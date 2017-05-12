import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {PizzaCounterModule} from './pizza-counter/pizza-counter.module';
import {PizzaCheckoutModule} from './pizza-checkout/pizza-checkout.module';
import {AppComponent} from './app.component';

import {appRoutes} from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    PizzaCheckoutModule,
    PizzaCounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
