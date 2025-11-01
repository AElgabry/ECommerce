import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  imports: [CarouselModule ],
  templateUrl: './slider.html',
  styleUrl: './slider.css'
})
export class Slider {
 slider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:2000,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
    nav: true
  }
}
