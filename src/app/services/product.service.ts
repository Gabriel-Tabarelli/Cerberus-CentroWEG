import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Product } from '../interfaces/Product/Product';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ProductMinimized } from '../interfaces/Product/ProdutctMinimized';
import { Question } from '../interfaces/Question';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  url: string = "http://localhost:8082/api/produto/"

  constructor( private httpClient: HttpClient) { }

  getAllMinimizado(page: Number): Observable<ProductMinimized[]> {
    return this.httpClient.get<ProductMinimized[]>(`${this.url}get/minimizados?page=${page}`);
  }

  getAllProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url + "get/all")
  }

  getProductById(id: string): Observable<Product> {
    return this.httpClient.get<Product>(this.url + id).pipe(
      catchError(() => {
        return throwError('Produto não encontrado');
      })
    );
  }

  getProductQuestions(id: string, page: number): Observable<any> {
    return this.httpClient.get<any>(this.url + id + "/perguntas?page=" + page);
  }

  getProductsBySearch(search: string): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.url}get/pesquisa/${search}`);
  }
}
