import { Component } from '@angular/core';
import { RecipesService } from './recipes.service';
import { Observable } from 'rxjs';
import { Recipe } from './recipe';
import {distinctUntilChanged} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  recipes$ : Observable<Recipe[]>;
  title = 'recipes';

  constructor(private recipesService: RecipesService) {}

  getRecipes() {
    this.recipes$ = this.recipesService.getRecipes().pipe(distinctUntilChanged());
    // console.log(this.recipes$);
  }

}
