import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Recipe } from './recipe';
import {tap, share, catchError, retry} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
     return this.http.get<Recipe[]>('http://www.recipepuppy.com/api')
     .pipe(
       retry(3),
       catchError(error => {
         console.log(error);
         return of([]);
       }),
       share());
  }
}
