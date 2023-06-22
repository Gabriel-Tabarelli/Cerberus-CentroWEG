import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent {
  
  @Input() isOpen: boolean;
  @Output() closeCartEvent = new EventEmitter();

  produtos = [
    {
      nome: "Nome do produto",
      img: "https://static.weg.net/medias/images/h39/hf5/BRASIL_W22_Plus_Premium_225_355_IE3_B3Dnew_1200Wx1200H.jpg"
    },
    {
      nome: "Nome do produto",
      img: "https://static.weg.net/medias/images/h39/hf5/BRASIL_W22_Plus_Premium_225_355_IE3_B3Dnew_1200Wx1200H.jpg"
    },
    {
      nome: "Nome do produto",
      img: "https://static.weg.net/medias/images/h39/hf5/BRASIL_W22_Plus_Premium_225_355_IE3_B3Dnew_1200Wx1200H.jpg"
    },
    {
      nome: "Nome do produto",
      img: "https://static.weg.net/medias/images/h39/hf5/BRASIL_W22_Plus_Premium_225_355_IE3_B3Dnew_1200Wx1200H.jpg"
    },
    {
      nome: "Nome do produto",
      img: "https://static.weg.net/medias/images/h39/hf5/BRASIL_W22_Plus_Premium_225_355_IE3_B3Dnew_1200Wx1200H.jpg"
    },
    {
      nome: "Nome do produto",
      img: "https://static.weg.net/medias/images/h39/hf5/BRASIL_W22_Plus_Premium_225_355_IE3_B3Dnew_1200Wx1200H.jpg"
    }
  ]

  closeCart() {
    this.isOpen = !this.isOpen
    this.closeCartEvent.emit();
  }

  deleteProduct() {
    console.log("aaaaa")
  }
}
