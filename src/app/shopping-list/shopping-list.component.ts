import { Component, OnInit } from '@angular/core';
import { Ingredient} from "../shared/ingredient.model"
import { ShoppinglitstService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  
})
export class ShoppingListComponent implements OnInit {
ingredients:Ingredient[]
  constructor(
    private slService:ShoppinglitstService
  ) { }

  ngOnInit() {
  this.ingredients=this.slService.getIngredient()
  this.slService.newIngredientAdded.subscribe((ingredient:Ingredient[])=>{
    this.ingredients=ingredient
  })
  }


}
