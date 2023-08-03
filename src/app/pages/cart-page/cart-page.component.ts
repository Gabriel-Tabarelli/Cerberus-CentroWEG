import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/Category';
import { Product } from 'src/app/interfaces/Product/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {


  listaDeProdutos: Product[] = []
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(cart => {
      this.listaDeProdutos = cart?.produtos ?? [];
    });

  }

  removeProduto(produto: Product) {
    this.cartService.removeFromCart(produto)
  }

  limparCarrinho() {
    this.cartService.cleanCart();
  }

}
