import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }
//  recipe: Recipe {
//     id: 1;
//     name: 'test';
//     ingredients: ['test1', 'test2'];
//   };
}
