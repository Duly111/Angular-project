import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Recipes } from '../../types/movies';
import { User } from '../../types/users';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit{

  recipes:Recipes[] = [];
 

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.api.getRecipes().subscribe(recipes => {
      this.recipes = recipes;
    })
  }
 
}
