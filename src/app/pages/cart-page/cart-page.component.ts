import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/Category';
import { Product } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  product: Product = {
    id : 1,
    productName :  "W22",
    url :  "https://static.weg.net/medias/images/h39/hf5/BRASIL_W22_Plus_Premium_225_355_IE3_B3Dnew_1200Wx1200H.jpg",
    description :  " Com carcaça de ferro fundido, flexibilidade de forma construtiva, pés maciços e inteiriços e níveis de ruído e temperatura de operação reduzidos, os motores W22 Alta Tensão são perfeitamente adequados para as mais diversas aplicações industriais.",
    category :  2,
    specificationList : [] 
    }
    listaDeProdutos: Product[] = []
  constructor() { }

  ngOnInit(): void {
    console.log(this.product)
    for (let i = 0; i < 5; i ++){
      this.listaDeProdutos.push(this.product)
    }
    console.log(this.listaDeProdutos)
  }

}
