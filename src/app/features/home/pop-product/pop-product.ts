import { Component, inject, OnInit } from '@angular/core';
import { Iproducts } from '../../../core/services/products/iproducts';
import { mProducts } from '../../../core/models/mproducts';
import { Card } from '../../../shared/components/card/card';

@Component({
  selector: 'app-pop-product',
  imports: [Card],
  templateUrl: './pop-product.html',
  styleUrl: './pop-product.css'
})
export class PopProduct implements OnInit {
  private readonly iproducts = inject(Iproducts)
  allProducts:mProducts[]=[]

  ngOnInit(): void {
      this.getProductsData()
      console.log(this.allProducts)
  }

  getProductsData():void
  {
    this.iproducts.getAllProduct().subscribe(
      {
        next:(res)=>{this.allProducts=res.data},
        error:(err)=>{console.log(err)}
      })
  }
}
