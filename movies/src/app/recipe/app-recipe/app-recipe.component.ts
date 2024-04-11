import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-app-recipe',
  templateUrl: './app-recipe.component.html',
  styleUrls: ['./app-recipe.component.css']
})
export class AppRecipeComponent {
  constructor(private apiService:ApiService , private router:Router){}


  addRecipe(form:NgForm){
    if(form.invalid){
      return;
    }

    const {name,steps,ingredients} = form.value;
    this.apiService.createRecipes(name,steps,ingredients).subscribe(() =>{
      this.router.navigate(['recipes'])
    })
    
  }
}
