import {Routes} from '@angular/router';
import {PizzaCounterComponent} from './pizza-counter/pizza-counter.component';
import {PizzaCheckoutComponent} from './pizza-checkout/pizza-checkout.component';

export const appRoutes: Routes = [
  {path: 'checkout', component: PizzaCheckoutComponent},
  {path: '', component: PizzaCounterComponent}
];
