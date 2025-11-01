import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environments } from '../../../../../enviroments/production';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Categories {
 
  private readonly httpClient = inject(HttpClient)

  getAllCat():Observable<any>
  {
    return this.httpClient.get(environments.baseUrl + "categories")
  }
}
