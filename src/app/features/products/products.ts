import { Component, inject, OnInit } from '@angular/core';
import { Iproducts } from '../../core/services/products/iproducts';
import { Card } from "../../shared/components/card/card";
import { mProducts } from '../../core/models/mproducts';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule, ɵInternalFormsSharedModule } from "@angular/forms"; 
import { FilterPipe } from '../../shared/pipes/filter-pipe';



@Component({
  selector: 'app-products',
  imports: [Card, NgxPaginationModule, ɵInternalFormsSharedModule, FormsModule, FilterPipe],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {

   private readonly iproducts = inject(Iproducts)
   allProducts: mProducts[] = []


   search:string=""
   pageSize!:number
   p!:number
   total!:number





  ngOnInit(): void {
      this.getProductsData()
      console.log(this.allProducts)
  }

  getProductsData(pagenumber:number=1):void
  {
    this.iproducts.getAllProduct(pagenumber).subscribe(
      {
        next:(res)=>{
          this.allProducts=res.data
          this.pageSize=res.metadata.limit
          this.p=res.metadata.currentPage
          this.total=res.results
        
        },
        error:(err)=>{console.log(err)}
      })
  }
}