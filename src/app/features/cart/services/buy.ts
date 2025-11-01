import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environments } from '../../../../../enviroments/production';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class Buy {

  private readonly httpClient = inject(HttpClient)
  private readonly cookieService = inject(CookieService)
  



  cartItems:BehaviorSubject<number> = new BehaviorSubject(0) 

  addToCart(id:string):Observable<any>
  {
    return this.httpClient.post(environments.baseUrl+"cart", {productId:id,},{headers:{token:this.cookieService.get("Token")}})
  }
  viewCart():Observable<any>
  {
    return this.httpClient.get(environments.baseUrl+"cart",{headers:{token:this.cookieService.get("Token")}})
  }
  deleteCartItem(id:string):Observable<any>
  {
    return this.httpClient.delete(environments.baseUrl+"cart/"+id, {headers:{token:this.cookieService.get("Token")}})
  }
  clearCart():Observable<any>
  {
    return this.httpClient.delete(environments.baseUrl+"cart", {headers:{token:this.cookieService.get("Token")}})
  }
   quantity(id:string, count:number):Observable<any>
  {
  return this.httpClient.put(environments.baseUrl+"cart/"+id,{count:count},{headers:{token:this.cookieService.get("Token")}})
  }

}
