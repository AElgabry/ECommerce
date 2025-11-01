import { Component , inject, Input, OnInit} from '@angular/core';
import { FlowbiteService } from '../../../core/services/flowbite';
import { initFlowbite } from 'flowbite';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Buy } from '../../../features/cart/services/buy';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive, ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit{
  private readonly cookieService = inject(CookieService)
  private readonly router = inject(Router)
  private readonly buy = inject(Buy)

  count!:number


@Input() isLogin!:boolean


constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
      this.showNumOfCartItems()  
    });

  }
  showNumOfCartItems()
  {
    this.buy.cartItems.subscribe(
      {
        next:(res)=>{this.count=res;console.log("Navbar = "+res);
        
        },
        error:(err)=>{console.log(err);
        }
      })
  }

  test()
  {
  this.buy.viewCart().subscribe(
      {
        next:(res)=>{this.buy.cartItems=res.numOfCartItems;console.log("funtion "+res.numOfCartItems);  
        },
        error:(err)=>{console.log(err);
        }
      })
  }


  out()
  {
    this.cookieService.delete("Token"),
    this.router.navigate(["/login"])
    
  }

  

  

}
