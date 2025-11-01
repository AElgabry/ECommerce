import { Component, inject, OnInit } from '@angular/core';
import { Form } from "../../shared/components/form/form";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Money } from './money';

@Component({
  selector: 'app-checkout',
  imports: [Form, ReactiveFormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout implements OnInit {


  private readonly formBuilder = inject(FormBuilder)
  private readonly activatedRoute = inject(ActivatedRoute)
  private readonly money = inject(Money)

  cartId:string|null=null


  payForm!:FormGroup

  ngOnInit(): void {
      this.intForm()
      this.getCartId()
  }

  intForm():void
  {
    this.payForm = this.formBuilder.group({

      shippingAddress : this.formBuilder.group({

        details:[null,[Validators.required]],
        phone:[null,[Validators.required]],
        city:[null,[Validators.required]],
      })

    })
  }
  getCartId()
  {
    this.activatedRoute.paramMap.subscribe({
      next:(res)=>{ this.cartId=res.get("id"),console.log(res.get("id"));},
      error:(err)=>{console.log(err);
      }
    })
  }

  submit()
  {
    if(this.payForm.valid)
      {
        this.money.checkout(this.cartId,this.payForm.value).subscribe(
          {
            next:(res)=>{ console.log(res); window.open(res.session.url,"_self") },
           error:(err)=>{console.log(err);}
          })
      }
  }
  

}
