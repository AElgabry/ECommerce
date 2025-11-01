import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../../../../enviroments/production';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class Money {

  private  readonly httpClient = inject(HttpClient)
  private  readonly cookieService = inject(CookieService)




  checkout(id:string|null, data:object):Observable<any>
  {
    return this.httpClient.post(environments.baseUrl+"orders/checkout-session/"+id+"?url=http://localhost:4200",data
      ,
        {headers:{token:this.cookieService.get("Token")}}
      
      )
  }
  userCart(id:string):Observable<any>
  {
    return this.httpClient.get(environments.baseUrl+`allorders/${id}`)
  }
  
}
