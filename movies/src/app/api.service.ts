import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Recipes } from './types/movies';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getRecipes(){
    const { apiUrl } = environment;

    return this.http.get<Recipes[]>(`${apiUrl}/data/recipes`)
  }

  // getDitails(id:number){
  //   const { apiUrl } = environment;

  //   return this.http.get(`${apiUrl}/data/recipes/${id}`)
  // }

  getRecipe(){
    const {apiUrl} = environment;
  }

  createRecipes(title:string,ingredients:string,steps:string){
    const {apiUrl} = environment;
    return this.http.post(`${apiUrl}/jsonstore/collections/recipes`,{title,ingredients,steps}).subscribe((data) =>{
    })
  }


  getPosts(limit?: number){
    const {apiUrl} =environment;
  }
}
