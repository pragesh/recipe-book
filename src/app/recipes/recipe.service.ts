import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            'A test Recipe', 
            'Test', 
            '#',
            [
                new Ingredient('Apples', 2),
                new Ingredient('Milk', 1)
            ]),
        new Recipe('Another test recipe', 'Test', '#', [
            new Ingredient('Bread', 2),
            new Ingredient('Milk', 1)
        ])];
    
    constructor(private slService : ShoppingListService){}
    
    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients : Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

}