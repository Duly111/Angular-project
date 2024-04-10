import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentRecipeComponent } from './current-recipe/current-recipe.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule } from '@angular/forms';
import { AppRecipeComponent } from './app-recipe/app-recipe.component';




@NgModule({
  declarations: [
    CurrentRecipeComponent,
    MoviesListComponent,
    PostListComponent,
    MainComponent,
    ContactsComponent,
    AppRecipeComponent,

  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class RecipeModule { }
