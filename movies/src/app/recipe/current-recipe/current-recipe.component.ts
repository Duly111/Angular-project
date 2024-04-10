import { Component } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-current-recipe',
  templateUrl: './current-recipe.component.html',
  styleUrls: ['./current-recipe.component.css']
})
export class CurrentRecipeComponent {
  constructor(private userService:UserService){

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
