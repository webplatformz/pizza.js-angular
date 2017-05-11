import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pizza-checkout',
  templateUrl: './pizza-checkout.component.html',
  styleUrls: ['./pizza-checkout.component.css']
})
export class CheckoutPageComponent implements OnInit {

  salutation: string;
  firstname: string;
  lastname: string;
  street: string;
  zip: string;
  city: string;
  phone: string;

  constructor() {
  }

  ngOnInit() {
    this.salutation = 'Herr';
  }

}
