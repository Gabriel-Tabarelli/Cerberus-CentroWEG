import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductMinimized } from 'src/app/interfaces/Product/ProdutctMinimized';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  @Input() busca: string = "";
  @Input() titulo: string = "";

  constructor(private router: Router,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.titulo = this.titulo.toUpperCase()
    this.getProducts()
  }

  listaDeProdutos: ProductMinimized[] = []

  navigateTo(id: number) {
    const rotaProduto = "/product-page/" + id
    this.router.navigate([rotaProduto])
  }

  getProducts() {
    switch (this.busca) {
      case "maisVendidos":
        this.productService.getAllMinimizado(0).subscribe((data: any) => {
          this.listaDeProdutos = data.content
          this.listaDeProdutos.concat(data.content)
        });
        break;

      case "maisRecentes":
        this.productService.getAllMinimizado(0).subscribe((data: any) => {
          this.listaDeProdutos = data.content
          this.listaDeProdutos.concat(data.content)
        });
        break;

      case "destaques":
        this.productService.getAllMinimizado(0).subscribe((data: any) => {
          this.listaDeProdutos = data.content
          this.listaDeProdutos.concat(data.content)
        });
        break;
        
      case "similares":
        this.productService.getAllMinimizado(0).subscribe((data: any) => {
          this.listaDeProdutos = data.content
          this.listaDeProdutos.concat(data.content)
        });
        break;
    }
  }

}
