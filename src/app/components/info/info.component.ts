import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params  } from '@angular/router';
import { FilmsService } from 'src/app/services/films.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(private filmservice: FilmsService, private activatedroute: ActivatedRoute,  private router: Router) { }

  id:any;
 
  names_characters: any[] = []
  ngOnInit(): void {
    this.GetParam()
    this.GetFilm();
    
    
    
  }

  home(){

   
      this.router.navigateByUrl(`home`);

    
  }
  GetParam(){
    this.activatedroute.params.subscribe((params: Params) => {      
      this.id = params['id'];  

    });


  }
  GetFilm(){
    
    this.filmservice.get_allfilms().subscribe((data:any)=>{
      for (let character of data.results[this.id].characters){ 

        this.filmservice.get_people(character).subscribe((data:any)=>{
          this.names_characters.push(data.name)
        })
        
      }

    })


  }

}
