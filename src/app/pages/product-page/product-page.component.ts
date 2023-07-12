import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { PathBar } from 'src/app/interfaces/PathBar';
import { Product } from 'src/app/interfaces/Product/Product';
import { Question } from 'src/app/interfaces/Question';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { UserStatusService } from 'src/app/services/user-state.service';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit, AfterViewInit {


  constructor(private routeSnap: ActivatedRoute,
    private userStatusService: UserStatusService,
    private router: Router,
    private cartService: CartService,
    private productService: ProductService) { }

    listaDeProdutos: Product[] = []

  ngOnInit(): void {
    this.userStatusService.userLoggedIn$.subscribe((logado) => {
      this.usuarioLogado = logado;
    });

    const id = this.routeSnap.snapshot.paramMap.get("id")
  
  
    this.findProduct(id);
    
  }

  ngAfterViewInit(): void {
    window.scrollTo(0, 0)
  }

  links: PathBar[] = [
    { link: "/home-page", nomeLink: "home" },
    { link: "/category-page", nomeLink: "motores elétricos" },
    { link: "/category-page", nomeLink: "W22" }
  ];

  product: Product = {
      id: 2,
      nome: "",
      urlImagem: "",
      descricao: "",
      categoriaId: 2,
      especificacoes: [""],
      commentList: []
  }
  usuarioLogado: boolean;

  moreInfo: boolean = false;

  answersVisibles: number[] = []
  questionText: String = "";
  currentPageComment: number = 1;

  nextPageComment() {
    this.currentPageComment++;
    //Fazer a lógica de receber do back
  }

  showAnswers(comment: Question) {
    const index = this.answersVisibles.indexOf(comment.id);
    if (index === -1) {
      this.answersVisibles.push(comment.id);
    } else {
      this.answersVisibles.splice(index, 1);
    }
  }

  isAnsersVisibles(comment: Question) {
    return this.answersVisibles.includes(comment.id);
  }

  openMoreInfo() {
    this.moreInfo = !this.moreInfo
  }

  adicionarAoCarrinho() {
    if (this.usuarioLogado) {
      this.cartService.addToCart(this.product)
    } else {
      this.router.navigate(['/signin-page'], { queryParams: { returnUrl: '/product-page/' + this.product.nome } });
    }
  }

  toComment() {
    console.log(this.questionText);
    //Fazer a lógica de enviar para o back
  }

  findProduct(id: string) {
    this.productService.getProductById(id).subscribe((data: Product) => {
      this.product = data;
      console.log(data)
    });
  }
}
