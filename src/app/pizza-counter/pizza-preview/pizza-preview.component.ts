import {Component, Input, OnInit} from '@angular/core';
import {PizzaSelection} from '../../typings/pizza-selection';

@Component({
  selector: 'app-pizza-preview',
  templateUrl: './pizza-preview.component.html',
  styleUrls: ['./pizza-preview.component.css']
})
export class PizzaPreviewComponent implements OnInit {

  @Input()
  pizzaSelection: PizzaSelection;

  constructor() {
  }

  ngOnInit() {

  }

  togglePreview() {
    document.getElementById('pizzaPreview').classList.toggle('pizza-preview--open');
  }

}
