import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglitstService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>()
    recipes: Recipe[] = [
        new Recipe("My first recipe",
            "recipe checking", "https://www.acedarspoon.com/wp-content/uploads/2019/08/Easy-Bok-Choy-Recipe-Image-7-777x1024.jpg",
            [
                new Ingredient('icecream', 1),
                new Ingredient('meet', 20)
            ]),
        new Recipe("second", "recipe",
            "https://www.acedarspoon.com/wp-content/uploads/2019/08/Easy-Bok-Choy-Recipe-Image-7-777x1024.jpg",
            [
                new Ingredient('Bun', 1),
                new Ingredient('meet', 2)
            ])
    ]
    constructor(private slService: ShoppinglitstService) { }
    getRecipe() {
        return this.recipes.slice()
    }

    addIngreToShopList(ingredient: Ingredient[]) {
        this.slService.addIngredients(ingredient)
    }
}