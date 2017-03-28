import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Recipe Website</h1>
    <h3>Recipe</h3>
    <ul>
      <p *ngFor="let currentRecipe of recipes">
        How to cook {{currentRecipe.title}}: <br>
        Ingredients: {{currentRecipe.ingredients}}<br>
        Directions: {{currentRecipe.directions}}
      </p>
    </ul>
  `
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe("Curry", "potato", "read manual"),
    new Recipe("Rice", "rice", "use rice cooker")
  ];
}

export class Recipe {
  constructor(public title: string, public ingredients: string, public directions: string){}
}
