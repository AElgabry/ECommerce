import { Component, inject, OnInit } from '@angular/core';
import { Categories } from '../../../core/services/categories/categories';
import { Cat } from '../../../core/models/cat';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-pop-cat',
  imports: [CarouselModule],
  templateUrl: './pop-cat.html',
  styleUrl: './pop-cat.css'
})
export class PopCat implements OnInit {

  private readonly categories = inject(Categories)
  AllCategories:Cat[] =[]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:2000,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true
  }  

  ngOnInit(): void {
    this.getCat()
  }

  getCat():void
  {
    this.categories.getAllCat().subscribe(
      {
        next:(res)=>{this.AllCategories=res.data},
        error:(err)=>{console.log(err)}

      })
  }

}
