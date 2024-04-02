import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getMovies(){
    const { apiUrl } = environment;

    return this.http.get(`${apiUrl}/`)
  }

  getPosts(limit?: number){}
}
