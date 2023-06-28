import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/Product';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit {

  constructor(private route: Router, private cartService: CartService){}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.produtos = items;
    });
  }
  
  @Input() isOpen: boolean;
  @Output() closeCartEvent = new EventEmitter();

  produtos: Product[]; 
  

  closeCart() {
    this.isOpen = !this.isOpen
    this.closeCartEvent.emit();
  }

  deleteProduct(produto: Product) {
    this.cartService.removeFromCart(produto)
  }

  navigateTo() {
    this.closeCart()
    this.route.navigate(["cart-page"])
  }
}
