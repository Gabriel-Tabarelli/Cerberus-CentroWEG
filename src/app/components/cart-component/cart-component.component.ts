import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent {

  @Input() isOpen: boolean;
  @Output() closeCartEvent = new EventEmitter();

  closeCart() {
    this.isOpen = !this.isOpen
    this.closeCartEvent.emit();
  }
}
