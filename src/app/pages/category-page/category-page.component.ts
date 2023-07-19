import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-category-page',
    templateUrl: './category-page.component.html',
    styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {

    id: any;
    listaDeProdutos: any[] = [{
        nome: "Home", 
        urlIcone: "http://localhost:4200/assets/icons/motorEletricoIcon.png"
    }]
    pathBar: any[] = [];

    constructor(private routeSnap: ActivatedRoute, private router: Router, private categoryService: CategoryService) { }

    ngOnInit(): void {
        this.id = this.routeSnap.snapshot.paramMap.get("id")
        this.categoryService.findOne(this.id).subscribe(data => {
            this.listaDeProdutos = data
            this.pathBarConstructor(this.listaDeProdutos[0])
            this.pathBar.pop()
            console.log(this.listaDeProdutos[0])
            console.log(this.pathBar)
        });
    }

    pathBarConstructor(categoria:any) {
        if (categoria.categoria != null) {
            this.pathBarConstructor(categoria.categoria)
        }
        this.pathBar.push(categoria.nome);
    }

    redirect(id: string) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.navigate(["/category-page/" + id]);
    }
}

