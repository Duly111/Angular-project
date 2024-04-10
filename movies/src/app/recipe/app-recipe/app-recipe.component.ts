import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-app-recipe',
  templateUrl: './app-recipe.component.html',
  styleUrls: ['./app-recipe.component.css']
})
export class AppRecipeComponent {

  addRecipe(form:NgForm){
    if(form.invalid){
      return;
    }
    
  }
}
