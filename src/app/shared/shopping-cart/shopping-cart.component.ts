import {Component, Input, OnInit} from '@angular/core';
import {ShoppingCartService} from '../../core/shopping-cart.service';
import {Observable} from 'rxjs/Observable';
import {PizzaSelection} from '../../typings/pizza-selection';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  @Input()
  showOrderButton = true;

  pizzaSelections$: Observable<PizzaSelection[]>;

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
    this.pizzaSelections$ = this.shoppingCartService.selections$;
  }

}
