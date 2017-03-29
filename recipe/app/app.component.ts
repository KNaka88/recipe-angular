import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Recipe Website</h1>
    <h3>Recipe</h3>
    <ul>
      <li (click)="showDetail()" (click)="selectRecipe(currentRecipe)" *ngFor="let currentRecipe of recipes">
        {{currentRecipe.title}}
      </li>
    </ul>

      <div *ngIf="showHide">
        <h3>How to Cook {{selectedRecipe.title}}</h3><br>
        <p>Ingredients: {{selectedRecipe.ingredients}}</p><br>
        <p>Directions: {{selectedRecipe.directions}}</p><br>
        <form>
          <div class="form-group">
            <label for="title">Edit Recipe Name</label>
            <input name="editTitle" [(ngModel)]="editTitle" type="text" id="title">
          </div>
          <div class="form-group">
            <label for="ingredients">Edit Recipe ingredients</label>
            <input name="editIngredients" [(ngModel)]="editIngredients" type="text" id="ingredients">
          </div>
          <div class="form-group">
            <label for="directions">Edit Recipe Directions</label>
            <input name="editDirections" [(ngModel)]="editDirections" type="text" id="directions">
          </div>
        </form>
        <p>{{editTitle}}</p>
        <button (click)="saveRecipe(editTitle, editIngredients, editDirections)">Save</button>
      </div>


  `
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
