import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent {

  @Input() isOpen: boolean;

  closeCart() {
    this.isOpen = !this.isOpen
  }
}
