import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environments } from '../../../../../enviroments/production';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecPro {

  private readonly httpClient= inject(HttpClient)

  getSpecificProduct(id:string|null):Observable<any>
  {
    return this.httpClient.get(environments.baseUrl +"products/"+id)
  }
  
}
