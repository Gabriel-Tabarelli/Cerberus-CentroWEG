import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  url: string = "http://localhost:8082/api/pedido/"
  constructor(private httpClient: HttpClient) { }

  saveRequest(idCart: any) {
    this.httpClient.post(this.url + idCart, null).subscribe();
  }

}
