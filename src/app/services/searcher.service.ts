import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SearcherService {

  constructor(private http:HttpClient) { }

  private apiKey:string='a93c0b07';
  private url:string='http://www.omdbapi.com/'
  getMovies(name:string, type:string){
    const movies=this.http.get(`${this.url}?apikey=${this.apiKey}&s=${name}&type=${type}`).toPromise();
    return movies;
  }

  getMovie(id:string){
    const movie=this.http.get(`${this.url}?apikey=${this.apiKey}&i=${id}`);
    return movie;
  }
}
