import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {

  constructor(private routeSnap: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.routeSnap.snapshot.paramMap.get("id")
    this.buscarProdutos(id);
  }

  listaDeProdutos: [] = []

  buscarProdutos(id: any) {
    console.log(id)
  }
}
