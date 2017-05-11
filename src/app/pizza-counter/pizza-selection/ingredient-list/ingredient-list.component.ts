import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ingredient} from '../../../typings/ingredient';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {

  @Input()
  ingredients: Ingredient[];

  @Input()
  selectedIngredients: Ingredient[];

  @Output()
  onRemoveIngredient = new EventEmitter<Ingredient>();

  @Output()
  onAddIngredient = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelectIngredient(ingredient: Ingredient, checked: boolean) {
    if (checked) {
      this.onAddIngredient.emit(ingredient);
    } else {
      this.onRemoveIngredient.emit(ingredient);
    }
  }
}
