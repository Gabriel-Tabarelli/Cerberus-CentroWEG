import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PathBar } from 'src/app/interfaces/PathBar';
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
    pathBar: PathBar[] = [];

    constructor(private routeSnap: ActivatedRoute,
        private categoryService: CategoryService,
        private router: Router) { }

    ngOnInit(): void {
        this.routeSnap.params.subscribe(params => {
            this.id = params['id'];
            this.categoryService.findOne(this.id).subscribe(data => {
                this.listaDeProdutos = data
                this.pathBarConstructor(this.listaDeProdutos[0].categoria)
                if (this.listaDeProdutos[0].categoria != null) {
                    this.categoriaIcon = this.listaDeProdutos[0].categoria.urlIcone
                }
            });
        });
    }

    ngAfterViewInit(): void {
        window.scrollTo(0, 0)
      }

    buscarProdutos(id: any) {
        this.categoryService.findOne("Controls").subscribe((data: any) => {
            this.listaDeProdutos = data.produtos
        }
        )
    }

   
    categoriaIcon: string = ""



    pathBarConstructor(categoria: any) {
        let link: PathBar;
        this.pathBar = [];
        if (categoria.categoria != null) {
            this.pathBarConstructor(categoria.categoria)
        }
        if (categoria.nome == "Home") {
            link = {
                link: categoria.nome,
                nomeLink: "Home"
            }
        } else {
            link = {
                link: "/category-page/" + categoria.nome,
                nomeLink: categoria.nome
            }
        }
        this.pathBar.push(link);
    }

    redirect(produto: any) {
        if (this.listaDeProdutos[0].id) {
            this.router.navigate(["/product-page/" + produto.id]);
        } else {
            this.router.navigate(["/category-page/" + produto.nome]);
        }
    }

}

