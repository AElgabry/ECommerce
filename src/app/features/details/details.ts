import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpecPro } from './services/spec-pro';
import { IspecPro } from './interfaces/ispec-pro';
import { ToastrService } from 'ngx-toastr';
import { Buy } from '../cart/services/buy';


@Component({
  selector: 'app-details',
  imports: [ ],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details implements OnInit {
private readonly activatedRoute = inject(ActivatedRoute)
private readonly specPro= inject(SpecPro)
private readonly buy = inject(Buy)
private readonly toastrService = inject(ToastrService)

id:string|null=null
productDetails:IspecPro= {} as IspecPro


ngOnInit(): void {
    this.getProductId()
    this.showProduct()
}


getProductId():void
{
  this.activatedRoute.paramMap.subscribe(
    {
      next:(res)=>{this.id = res.get("id")},
      error:(err)=>{console.log(err);
      }
    })
}

showProduct():void
{
  this.specPro.getSpecificProduct(this.id).subscribe(
    {
      next:(res)=>{this.productDetails = res.data;
      },
      error:(err)=>{console.log(err);
    }})
}

addToCart(id:string)
{
  this.buy.addToCart(id).subscribe(
    {
      next:(res)=>{this.toastrService.success('This product has been added to your cart') ,console.log(res);
        this.buy.cartItems.next(res.numOfCartItems);

      },
      error:(err)=>{console.log(err);
      }
    })
}

}
