import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/Product/Product';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})
export class FavoritePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  listaDeProdutos: Product[] = [
  ]

  navigateTo(nome: string){
    const rotaProduto = "/product-page/" + encodeURIComponent(nome)
    this.router.navigate([rotaProduto])
  }

  buscarMais(){
    console.log("Função pra buscar mais produtos")
  }
}
