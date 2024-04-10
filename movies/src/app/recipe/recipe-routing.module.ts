import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AppRecipeComponent } from './app-recipe/app-recipe.component';
import { CurrentRecipeComponent } from './current-recipe/current-recipe.component';
import { AuthActivate } from '../guards/auth.activate';
import { ContactsComponent } from './contacts/contacts.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

const routes: Routes = [
  { path: 'recipes', component: MainComponent },
  {
    path: 'add-recipe',
    component: AppRecipeComponent,
    canActivate: [AuthActivate],
  },
  { path: 'details', component: CurrentRecipeComponent },
  {path:'contacts', component:ContactsComponent},
  {path:'recipes', children:[{path:'', pathMatch:'full', component:MoviesListComponent},
  {path:':recipeId', component:CurrentRecipeComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeRoutingModule {}
