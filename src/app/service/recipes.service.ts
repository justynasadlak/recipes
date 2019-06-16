import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Data } from 'src/app/model/data';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  getRecipes(name: string, ingredients: string): Observable<Data> {
     return this.http.get<Data>(
       `https://cors-anywhere.herokuapp.com/www.recipepuppy.com/api/?i=${!!ingredients ? ingredients : ''}&q=${!!name ? name : ''}`
      );
  }
}
