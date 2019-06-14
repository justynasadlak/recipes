import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component : RecipeComponent }
];

@NgModule({
  declarations: [
    RecipeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class RecipeModule { }
