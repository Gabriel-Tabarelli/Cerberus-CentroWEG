import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {

  constructor(private routeSnap: ActivatedRoute,
    private categoryService: CategoryService) { }

  ngOnInit(): void {

    const id = this.routeSnap.snapshot.paramMap.get("id")
    this.buscarProdutos(id);
  }

  listaDeProdutos: [] = []

  buscarProdutos(id: any) {
    console.log(id)
    this.categoryService.findOne(id).subscribe((data: any) => {
      console.log(data)
      this.listaDeProdutos = data.produtos
      console.log(this.listaDeProdutos)
    }
    )
  }
}
