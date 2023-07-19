import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PathBar } from 'src/app/interfaces/PathBar';
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
  pathBar: PathBar[] = [{ nomeLink: "Home", link: "/home-page" }]

  buscarProdutos(id: any) {
    console.log(id)
    this.categoryService.findOne("Controls").subscribe((data: any) => {
      console.log(data)
      this.listaDeProdutos = data.produtos
    }
    )
  }

}
