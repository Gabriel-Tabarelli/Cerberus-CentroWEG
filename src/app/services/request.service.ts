import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  url: string = "http://localhost:8082/api/pedido/"
  constructor(private httpClient: HttpClient) { }

  saveRequest(idCart: any) {
    this.httpClient.post(this.url + idCart, null).subscribe();  
  }

  findSomeRequest(id: number, page: number, sort: string) {
    return this.httpClient.get(this.url + `getAll/${id}?page=${page}&sort=${sort}`)
  }

  findOne(id: number){
    return this.httpClient.get(this.url + `${id}`);
  }

}
