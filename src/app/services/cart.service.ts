import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  private cartItems: Product[] =  []
  constructor() {}

  addToCart(product: Product): void {
    this.cartItems.push(product); 
    this.cartItemsSubject.next(this.cartItems);
  }

  removeFromCart(product: Product): void {
    const index = this.cartItems.findIndex(item => item.productName === product.productName);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
    this.cartItemsSubject.next(this.cartItems);
  }

  cleanCart(){
    this.cartItems = []
    this.cartItemsSubject.next(this.cartItems)
  }
 

  
}
