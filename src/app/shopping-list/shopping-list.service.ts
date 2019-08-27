import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppinglitstService {
    newIngredientAdded=new EventEmitter<Ingredient[]>()
    ingredients: Ingredient[] = [

        new Ingredient("Lemon", 5),
        new Ingredient("Orange", 5)
    ]

    getIngredient() {
        return this.ingredients.slice()
    }

    adddIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        this.newIngredientAdded.emit(this.ingredients.slice())
    }
    addIngredients(ingredient:Ingredient[]){
        this.ingredients.push(...ingredient)
        this.newIngredientAdded.emit(this.ingredients.slice())
    }
}