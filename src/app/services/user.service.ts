import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductMinimized } from "../interfaces/Product/ProdutctMinimized";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    url: string = "http://localhost:8082/api/pessoa"

    constructor(private httpClient: HttpClient) { }

    getOneByEmailAndPassword(email:string, password:string): Observable<ProductMinimized[]> {
        return this.httpClient.get<ProductMinimized[]>(`${this.url}?email=${email}&senha=${password}`)
    }

    getEnderecoProjection(id: any): Observable<any> {
        return this.httpClient.get<any>(`${this.url}/endereco/${id}`)
    }

    getNotificationsByUserId(id:number, page:number): Observable<any> {
        return this.httpClient.get<any>(`${this.url}/${id}/notificacoes?page=${page}`)
    }

    visualizeNotification(id: number): Observable<any> {
        return this.httpClient.put<any>(`${this.url}/visualizar-comentario`, id)
    }

    existNotifications(id: number): Observable<any> {
        return this.httpClient.get<any>(`${this.url}/${id}/notificacoes/existe-nao-visualizada`)
    }
    
}