import { Component, inject, Input } from '@angular/core';
import { mProducts } from '../../../core/models/mproducts';
import { RouterLink } from '@angular/router';
import { Buy } from '../../../features/cart/services/buy';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card',
  imports: [RouterLink ],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
@Input({required:true}) product:mProducts= {} as mProducts
private readonly buy = inject(Buy)
private readonly toastrService = inject(ToastrService)




getCartProducts(id:string)
{

  this.buy.addToCart(id).subscribe(
    {
      next:(res)=>{this.toastrService.success('This product has been added to your cart',"",{timeOut: 750}) ,console.log(res);
        this.buy.cartItems.next(res.numOfCartItems);
      
      },
      error:(err)=>{console.log(err);
      }
    })
}

}
