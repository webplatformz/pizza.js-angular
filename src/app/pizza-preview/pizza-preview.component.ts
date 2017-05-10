import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-preview',
  templateUrl: './pizza-preview.component.html',
  styleUrls: ['./pizza-preview.component.css']
})
export class PizzaPreviewComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

  togglePreview() {
    document.getElementById('pizzaPreview').classList.toggle('pizza-preview--open');
  }

}

