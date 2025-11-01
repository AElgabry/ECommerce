import { Component, inject, OnInit } from '@angular/core';
import { Callbrands } from './callbrands';
import { Ibrands } from './ibrands';
import { Card } from "../../shared/components/card/card";

@Component({
  selector: 'app-brands',
  templateUrl: './brands.html',
  styleUrl: './brands.css'
})
export class Brands implements OnInit {

  private readonly callbrands = inject(Callbrands)

  brands:Ibrands[] = []

  ngOnInit(): void {
      this.ShowAllBrands()
  }

  ShowAllBrands()
  {
    this.callbrands.getAllBrands().subscribe(
      {
        next:(res)=>{this.brands=res.data,console.log(res.data);
        },
        error:(err)=>{console.log(err);
        }
      })
  }


}
