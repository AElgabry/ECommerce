import { Component, inject } from '@angular/core';
import{AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from'@angular/forms'
import { Authentication } from '../services/authentication';
import { Router } from '@angular/router';
import { Form } from "../../../shared/components/form/form";

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, Form],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  private readonly authentication = inject(Authentication)
  private readonly router = inject(Router)

  load:boolean=false
  message:string=""
  flag:boolean=true

  registerForm:FormGroup = new FormGroup({

    name:new FormControl(null,[Validators.required,Validators.minLength(3)]),
    email:new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
    password:new FormControl(null,[Validators.required,Validators.minLength(6)]),
    rePassword:new FormControl(null,[Validators.required]),
    phone:new FormControl(null,[Validators.required, Validators.pattern(/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/)])
    },
    {validators:this.passwordCheck}
  )

  passwordCheck(pass:AbstractControl)
  {
    return pass.get("password")?.value===pass.get("rePassword")?.value?null:{match:false}
  }

  submit():void
  {
    
    if(this.registerForm.valid==true)
      {
        this.load=true
        this.authentication.createAcc(this.registerForm.value).subscribe(
          {
            next:(res)=>{console.log(res),this.message="", this.router.navigate(['/login']); this.load=false},
            error:(err)=>{this.message=err.error.message; this.load=false; console.log(err);
            }
          })          
      }
      else
        {
          this.registerForm.markAllAsTouched()
        }
  }



}
