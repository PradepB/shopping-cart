import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe} from "../recipe.model"
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected=new EventEmitter<Recipe>()
recipes: Recipe[]=[
  new Recipe("My first recipe","recipe checking","https://www.acedarspoon.com/wp-content/uploads/2019/08/Easy-Bok-Choy-Recipe-Image-7-777x1024.jpg"),
  new Recipe("second","recipe","https://www.acedarspoon.com/wp-content/uploads/2019/08/Easy-Bok-Choy-Recipe-Image-7-777x1024.jpg")
]
  constructor() { }

  ngOnInit() {
  }
  recipeItemSelect(recipe:Recipe){
    this.recipeWasSelected.emit(recipe)

  }
}
