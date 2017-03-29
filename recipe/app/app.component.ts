import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'partials/app.html'
})

export class AppComponent {


  recipes: Recipe[] = [
    new Recipe("Curry", "potato", "read manual"),
    new Recipe("Rice", "rice", "use rice cooker")
  ];

  showHide = false;
  selectedRecipe: Recipe = null;
  editTitle: string = "";
  editIngredients: string = "";
  editDirections: string = "";

  showDetail(){
      this.showHide = !this.showHide;
  }

  selectRecipe(clickedRecipe){
    this.selectedRecipe = clickedRecipe;
  }

  saveRecipe(editTitle, editIngredients, editDirections){
    this.selectedRecipe.title = editTitle;
    this.selectedRecipe.ingredients = editIngredients;
    this.selectedRecipe.directions = editDirections;

    this.editTitle = "";
    this.editIngredients = "";
    this.editDirections = "";
  }



}

export class Recipe {
  constructor(public title: string, public ingredients: string, public directions: string){}
}
