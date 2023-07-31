import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PathBar } from 'src/app/interfaces/PathBar';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  pesquisa: string;
  listaDeProdutos: any[] = [{
    nome: "Home",
    urlIcone: "http://localhost:4200/assets/icons/motorEletricoIcon.png"
  }]

  constructor(private routeSnap: ActivatedRoute,
    private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.routeSnap.params.subscribe(params => {
      this.pesquisa = params['search'];
      this.productService.getProductsBySearch(this.pesquisa).subscribe((data: any) => {
        this.listaDeProdutos = data
      });
    });
  }

  redirect(produto: any) {
    this.router.navigate(["/product-page/" + produto.id]);
  }

}
