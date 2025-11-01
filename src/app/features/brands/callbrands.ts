import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../../../../enviroments/production';

@Injectable({
  providedIn: 'root'
})
export class Callbrands {
  private readonly httpClient = inject(HttpClient)


  getAllBrands():Observable<any>
  {
    return this.httpClient.get(environments.baseUrl+"brands")
  }

}
