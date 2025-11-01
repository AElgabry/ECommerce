import { Component, inject, OnInit } from '@angular/core';
import { Buy } from './services/buy';
import { Icart } from './icart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit {


  private readonly buy = inject(Buy)

  cartProducts:Icart = {} as Icart
  cartId!:string 
  cartItems!:number
  ngOnInit(): void {
      this.viewCartproducts()
  }

  viewCartproducts()
  {
    this.buy.viewCart().subscribe(
      {
        next:(res)=>{this.cartProducts=res.data,console.log(res), this.cartId=res.cartId;this.cartItems=res.numOfCartItems;
        },
        error:(err)=>{console.log(err);
        }
      })
  }
  deleteCartProducts(id:string)
  {
    this.buy.deleteCartItem(id).subscribe(
      {
        next:(res)=>{console.log(res.data),this.cartProducts=res.data; this.buy.cartItems.next(res.numOfCartItems);

        
        },
        error:(err)=>{console.log(err);
        }
      })
  }
  clearCartProducts()
  {
    this.buy.clearCart().subscribe(
      {
        next:(res)=>{console.log(res.data),this.cartProducts=res;this.buy.cartItems.next(res.numOfCartItems);
        },
        error:(err)=>{console.log(err);
        }
      })
  }
  changeQuantity(id:string,count:number)
  {
    this.buy.quantity(id,count).subscribe(
      {
        next:(res)=>{this.cartProducts=res.data ,console.log(res.data);this.buy.cartItems.next(res.numOfCartItems);},
        error:(err)=>{console.log(err);}
        
      })
  }
}
