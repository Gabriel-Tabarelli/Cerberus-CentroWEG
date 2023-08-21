import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Product/Product';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../interfaces/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItemsSubject: BehaviorSubject<Cart> = new BehaviorSubject<Cart>(null);
  cartItems$ = this.cartItemsSubject.asObservable();

  url: string = "http://localhost:8082/api/carrinho"

  private cartItems: Cart = {
    id: 0, 
    produtos: [],
    pessoa: null
  };

  constructor(private httpClient: HttpClient) {
    this.findCart();
  }

  findCart() {
    if (sessionStorage.getItem('usuario') !== null) {
      this.httpClient.get<Cart>(this.url + "/" + JSON.parse(sessionStorage.getItem('usuario')).id).subscribe((data: Cart) => {
        this.cartItems = data;
        console.log(data)
        this.cartItemsSubject.next(this.cartItems);
      })
    }
  }

  cartDefault() {
    this.cartItems = {
      id: 0, 
      produtos: [],
      pessoa: null
    };
    this.cartItemsSubject.next(this.cartItems)
  }

  addToCart(product: Product): void {
    if (!this.includesInCart(product)) {
      this.cartItems.produtos.push(product);
      this.cartItemsSubject.next(this.cartItems);
      this.httpClient.put(this.url, this.cartItems).subscribe();
    }
  }

  removeFromCart(product: Product): void {
    const index = this.cartItems.produtos.findIndex(item => item.nome === product.nome);
    if (index !== -1) {
      this.cartItems.produtos.splice(index, 1);
    }
    this.cartItemsSubject.next(this.cartItems);
    this.httpClient.put(this.url, this.cartItems).subscribe();
  }

  cleanCart() {
    this.cartItems.produtos = []
    this.cartItemsSubject.next(this.cartItems)
    this.httpClient.put(this.url, this.cartItems).subscribe();
  }

  includesInCart(product: Product): boolean {
    console.log(this.cartItems.produtos)
    for (const cartItem of this.cartItems.produtos) {
      if (cartItem.id === product.id) {
        return true; // Produto encontrado no carrinho
      }
    }
    return false;
  }

}
