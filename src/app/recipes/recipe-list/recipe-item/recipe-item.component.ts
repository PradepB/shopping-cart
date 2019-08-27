import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from "../../recipe.model"
import { RecipeService } from '../../recipe.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input('recipe-item') recipe: Recipe//{ name: string, description: string, imagePath: string }

  // @Output() recipeSelected = new EventEmitter<void>()

  constructor(
    private recipeService:RecipeService
  ) { }

  ngOnInit() {
  }
  onSelected_item() {
    this.recipeService.recipeSelected.emit(this.recipe)
    // this.recipeSelected.emit()

  }
}
