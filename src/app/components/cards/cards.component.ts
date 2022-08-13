import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  films: any[] = [];
  constructor(private filmservice: FilmsService, private router: Router) { }

  ngOnInit(): void {
    this.GetFilms();
    
  }

  getroute_id(id: any){
    this.router.navigateByUrl(`info/${id}`);

  }
 
  GetFilms(){
    
    this.filmservice.get_allfilms().subscribe((data:any)=>{
      
      for (let film of data.results){ 
        this.films.push(film)
      
      }

      
      
    })
  }
}
