import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '@angular/router';
import { RecipesService } from '../service/recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  public ingredients: string;
  public name: string;
  public data$: Observable<Data>;

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
  }

  async getRecipes() {
    console.log('jestem w komponencie');
    if(this.ingredients) {this.ingredients = this.ingredients.split(/[ ,]+/).join(',');}
    this.data$ = this.recipesService.getRecipes(this.name, this.ingredients);
    console.log(this.ingredients);
    console.log(this.name);

  }
}
