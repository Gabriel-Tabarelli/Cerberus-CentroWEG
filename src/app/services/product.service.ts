import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/Product/Product';
import { HttpClient } from '@angular/common/http';
import { ProductMinimized } from '../interfaces/Product/ProdutctMinimized';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  url: string = "http://localhost:8081/api/produto"

  constructor( private httpClient: HttpClient) { }

  getAllMinimizado(): Observable<ProductMinimized[]> {
    return this.httpClient.get<ProductMinimized[]>(this.url + "/get/minimizados")
  }

  getAllProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url + "/get/all")
  }

  getProductById(id: string): Observable<Product> {
    return this.httpClient.get<Product>(this.url + "/" +  id)
  }

  get

}
