import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductMinimized } from 'src/app/interfaces/Product/ProdutctMinimized';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router,
    private productService: ProductService) { }

  ngOnInit(): void {
    console.log("Iniciando home")
    this.getProducts()
  }

  listaDeProdutos: ProductMinimized[] = []

  navigateTo(id: number){
    const rotaProduto = "/product-page/" + id
    this.router.navigate([rotaProduto])
  }
  
  getProducts() {
    this.productService.getAllMinimizado().subscribe((data: ProductMinimized[]) => {
      this.listaDeProdutos = data
    });
  }
}

