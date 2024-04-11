import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Recipes } from 'src/app/types/movies';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-current-recipe',
  templateUrl: './current-recipe.component.html',
  styleUrls: ['./current-recipe.component.css']
})
export class CurrentRecipeComponent implements OnInit{

  recipe = {} as Recipes

  constructor(private userService:UserService,private apiService:ApiService,private activeRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) =>{
      const id = data['recipeId'];
      this.apiService.getRecipe(id).subscribe((recipe) =>{
        this.recipe = recipe;
      })
    })
  }

  get islogged():boolean{
    return this.userService.isLogged;
  }
   likes = 0;
   dislikes = 0;

  like(){
    this.likes++;
  }
  
  dislike(){
    this.dislikes++;
  }
}
