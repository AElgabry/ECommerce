import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Authentication } from '../services/authentication';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  private readonly authentication = inject(Authentication)
  private readonly router = inject(Router)
  private readonly cookieService = inject(CookieService)


  load:boolean = false
  message:string=''

  loginForm:FormGroup = new FormGroup(
    {
      email:new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
      password:new FormControl(null,[Validators.required,Validators.minLength(6)]),
    })


    submit():void
    {      
      if(this.loginForm.valid==true)
      {
        this.load=true
        this.authentication.signin(this.loginForm.value).subscribe(
          {
            next:(res)=>{this.message='';this.cookieService.set("Token", res.token) ,this.load=false, this.router.navigate(['/home'])},
            error:(err)=>{this.message=err.error.message; this.load=false;}
          })
      }
    }

}
