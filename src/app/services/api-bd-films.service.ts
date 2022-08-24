import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from "src/app/objects/User";
@Injectable({
  providedIn: 'root'
})
export class ApiBdFilmsService {
  //private url: string = "http://localhost/pruebaSidn/public/api/"
  private url: string = "https://api-prueba-sidn-backend.herokuapp.com/api/"
  constructor(private http: HttpClient) { }

  SetFavoriteFilm(favorite:object){
    
    //ruta para añadir pelicula favorita a la bd
    return this.http.post(this.url + "peliculas",favorite);

  }

  Getallfavoritefilm(){

    //ruta para recoger todas las peliculas favoritas
    return this.http.get(this.url + "peliculas");

  }

  LoginUser(email:string,password:string){
    
    let user= new User("any", email, password);
    return this.http.post(this.url + "login", user);
  }
  Registeruser(user:object){

      //registrar un nuevo usuario
      return this.http.post(this.url + "user",user);
     
  }

}
