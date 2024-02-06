import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe( "Mama's Sicilian Lasagna", "Homemade lasagna, Sicilian style", "../../../assets/images/sicilian-lasagna.jpg",
      [
        new Ingredient('Ground Beef', 1),
        new Ingredient('Lasagna Noodles', 10),
        new Ingredient('Ricotta Cheese', 1),
        new Ingredient('Mozzarella Cheese', 1),
        new Ingredient('Parmesan Cheese', 1),
        new Ingredient('Tomato Sauce', 1)
      ]),
    new Recipe( "Beef Tips on Noodles", "Beef in gravy over egg noodles", "../../../assets/images/beef-on-noodles.jpg",
      [
        new Ingredient('Beef Tips', 1),
        new Ingredient('Egg Noodles', 1),
        new Ingredient('Beef Gravy', 1)
      ]),
    new Recipe( "Chicken Soup", "Chicen soup for the soul", "../../../assets/images/chicken-soup.jpg",
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Carrots', 1),
        new Ingredient('Celery', 1),
        new Ingredient('Onion', 1),
        new Ingredient('Egg Noodles', 1),
        new Ingredient('Garlic', 1),
        new Ingredient('Chicken Broth', 1)
      ]),
    new Recipe( "Mac n' Cheese with Tomatoes", "French mac n' cheese, with tomatoes", "../../../assets/images/Mac-and-Cheese-with-tomatoes.jpg",
      [
        new Ingredient('Macaroni', 1),
        new Ingredient('Cheddar Cheese', 2),
        new Ingredient('Butter', 1),
        new Ingredient('Diced Tomatoes', 1)
      ]),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}


