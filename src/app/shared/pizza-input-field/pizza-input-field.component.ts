import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pizza-input-field',
  templateUrl: './pizza-input-field.component.html',
  styleUrls: ['./pizza-input-field.component.css']
})
export class PizzaInputFieldComponent implements OnInit {

  @HostBinding('class')
  classes = 'address-form__item';

  @Input()
  name: string;


  @Input()
  type = 'text';

  @Input()
  placeholder: string;

  @Input()
  errorMessage: string;

  @Input()
  value: any;

  @Input()
  fullWidth: boolean;

  constructor() {
  }

  ngOnInit() {
    if (this.fullWidth) {
      this.classes += ' address-form__item--full-width';
    }
  }

}
