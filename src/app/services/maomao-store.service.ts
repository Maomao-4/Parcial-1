import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MaomaoStoreService{

  constructor(private http: HttpClient) {
   }

   getProducts(){
    return this.http.get(environment.baseUrl+environment.Products)
  }

  getProductsById(id: string){
    return this.http.get(environment.baseUrl + environment.Products+ id)
  }
}
