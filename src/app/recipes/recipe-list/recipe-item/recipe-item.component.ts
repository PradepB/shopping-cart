import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from "../../recipe.model"
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input('recipe-item') recipe: Recipe//{ name: string, description: string, imagePath: string }

  @Output() recipeSelected = new EventEmitter<void>()

  constructor() { }

  ngOnInit() {
  }
  onSelected_item() {
    this.recipeSelected.emit()
  }
}
