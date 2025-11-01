import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environments } from '../../../../../enviroments/production';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Authentication {
 
  private readonly httpClient = inject(HttpClient)


  createAcc(acc:object):Observable<any>
  {
    return this.httpClient.post( environments.baseUrl  +"auth/signup" , acc)
  }
  signin(acc:object):Observable<any>
  {
    return this.httpClient.post(environments.baseUrl+"auth/signin" , acc)
  }

}
