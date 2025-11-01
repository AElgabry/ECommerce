import { environments } from './../../../../../enviroments/production';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Iproducts {
  
  private readonly httpClient = inject(HttpClient)
  
  getAllProduct(pageNumber:number=1):Observable<any>
  {
      return this.httpClient.get(environments.baseUrl + "products?page="+pageNumber)
  }



}
