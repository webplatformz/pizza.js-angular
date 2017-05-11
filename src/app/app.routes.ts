import {Routes} from '@angular/router';
import {PizzaPageComponent} from './pizza-counter/pizza-counter.component';
import {CheckoutPageComponent} from './pizza-checkout/pizza-checkout.component';

export const appRoutes: Routes = [
  {path: 'checkout', component: CheckoutPageComponent},
  {path: '', component: PizzaPageComponent}
];
