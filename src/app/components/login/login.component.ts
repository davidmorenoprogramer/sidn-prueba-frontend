import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormsModule, ReactiveFormsModule,FormControl } from 
'@angular/forms';
import { ApiBdFilmsService } from 'src/app/services/api-bd-films.service';
import { User } from "src/app/objects/User";
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  RegisterForm: FormGroup;
  email: string = "";
  password:string = "";
  Errors:any [] = [];
  constructor(private forbuilderForm: FormBuilder, private route: Router,private apiservice:ApiBdFilmsService,private cookieService:CookieService) { 

    this.RegisterForm = this.forbuilderForm.group({
      email: '',
      password: '',
    });

  }

  ngOnInit(): void {
  }
  LoginEnviado(){
    this.apiservice.LoginUser(this.email,this.password).subscribe((data:any)=>{
      if (data[0]=="logueado"){
        this.cookieService.set('accessToken',data[3],4,'/');
        this.route.navigate(['/home/'+ data[1]]);
      }
      else {
          console.log(data[1])

      }
      this.Errors = [];
      this.Errors = data[1];
    });

  }



}
