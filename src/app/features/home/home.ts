import { mProducts } from '../../core/models/mproducts';
import { Iproducts } from './../../core/services/products/iproducts';
import { Component, inject, OnInit } from '@angular/core';
import { Card } from "../../shared/components/card/card";
import { Slider } from "./slider/slider";
import { PopCat } from "./pop-cat/pop-cat";
import { PopProduct } from "./pop-product/pop-product";

@Component({
  selector: 'app-home',
  imports: [Slider, PopCat, PopProduct],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

 

}
