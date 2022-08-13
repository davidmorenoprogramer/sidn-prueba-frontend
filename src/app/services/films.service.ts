import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private url: string = "https://swapi.dev/api/films";
  private url_people = "https://swapi.dev/api/people/"

  constructor(private http: HttpClient) { }

  get_allfilms(){


    return this.http.get(this.url );

  }
  
  get_people(id:any){


    return this.http.get(id);

  }


}
