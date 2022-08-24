import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormsModule, ReactiveFormsModule,FormControl } from 
'@angular/forms';
import { ApiBdFilmsService } from 'src/app/services/api-bd-films.service';
import { User } from "src/app/objects/User";
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  Errors:any [] = []
  RegisterForm: FormGroup;
  User = new User("", "", "");

  constructor(private forbuilderForm: FormBuilder, private route: Router,private apiservice:ApiBdFilmsService) { 
    this.RegisterForm = this.forbuilderForm.group({
      name: '',
      email: '',
      password: '',
    });
    
  }
  

  public formularioEnviado() {
    
    this.apiservice.Registeruser(this.User).subscribe((data:any)=>{
      
      if (data[0] == "error"){
        this.Errors = []
       for (let error of data[1]){ 
          this.Errors.push(error)
        }
      }
      else{
        
        this.route.navigate(['/home']);
      }
    });
    
  }


  ngOnInit(): void {
  }

 
}
