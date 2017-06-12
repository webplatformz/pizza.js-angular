import {Component, OnInit} from '@angular/core';
import {Address} from 'app/typings/address';

@Component({
  selector: 'app-pizza-checkout',
  templateUrl: './pizza-checkout.component.html',
  styleUrls: ['./pizza-checkout.component.css']
})
export class PizzaCheckoutComponent implements OnInit {

  address = new Address();

  constructor() {
  }

  ngOnInit() {
    this.address.salutation = 'Herr';
  }

  sendOrder() {
    console.log(this.address);
  }
}
