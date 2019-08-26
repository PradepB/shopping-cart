import { Recipe } from './recipe.model';

export class RecipeService {
    recipes: Recipe[] = [
        new Recipe("My first recipe", "recipe checking", "https://www.acedarspoon.com/wp-content/uploads/2019/08/Easy-Bok-Choy-Recipe-Image-7-777x1024.jpg"),
        new Recipe("second", "recipe", "https://www.acedarspoon.com/wp-content/uploads/2019/08/Easy-Bok-Choy-Recipe-Image-7-777x1024.jpg")
    ]

    getRecipe() {
        return this.recipes.slice()
    }
}