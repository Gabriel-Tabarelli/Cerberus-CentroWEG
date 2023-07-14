import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { IMessage } from '@stomp/stompjs';
import { PathBar } from 'src/app/interfaces/PathBar';
import { Product } from 'src/app/interfaces/Product/Product';
import { Question } from 'src/app/interfaces/Question';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { UserStatusService } from 'src/app/services/user-state.service';
import { WebSocketService } from 'src/app/services/web-socket/web-socket.service';
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
    private productService: ProductService,
    private webSocket: WebSocketService) { }

    listaDeProdutos: Product[] = []

  ngOnInit(): void {
    this.userStatusService.userLoggedIn$.subscribe((logado) => {
      this.usuarioLogado = logado;
    });

    const id = this.routeSnap.snapshot.paramMap.get("id")
  
  
    this.findProduct(id);
    this.buscarComentarios(id);

    
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
      nome: "Não encontrado",
      urlImagem: "https://www.cbvj.org.br/index/wp-content/uploads/2017/07/default.png",
      descricao: "Algo deu errado, tente novamente mais tarde",
      categoriaId: 2,
      especificacoes: [""],
      listaDeComentarios: []
  }
  usuarioLogado: boolean;

  moreInfo: boolean = false;

  answersVisibles: number[] = []
  questionText: string = "";
  currentPageComment: number = 0;
  lastQuestion: boolean = true;

  nextPageComment() {
    this.currentPageComment++;
    this.findProduct(this.product.id.toString());
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
      this.usuarioDeslogado();
    }
  }

  toComment() {
    if (this.usuarioLogado) {
      this.webSocket.sendMessage(this.product.id, this.questionText);// Revisar como enviar mensagem !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
    } else {
      this.usuarioDeslogado();
    }
  }

  findProduct(id: string) {
    this.productService.getProductById(id).subscribe((data: Product) => {
      this.product = data;
    });
  }

  buscarComentarios(id: string) {
    console.log("buscando comentarios")
    console.log(id)
    console.log("Entrando")

    this.productService.getProductQuestions(id,this.currentPageComment).subscribe((data: any) => {
      const questions: Question[] = data.content[0].perguntas;
      this.product.listaDeComentarios = questions;
      this.lastQuestion = data.last
    });
  }

  favoritar() {
    if (this.usuarioLogado) {
      this.webSocket.subscribeToTopic(this.product.id,this.buscarComentarios.bind(this) // Revisar funcão de call back !!!!!!!!!!!!!!!
      );
    } else {
      this.usuarioDeslogado();
    }
  }

  usuarioDeslogado(){
    this.router.navigate(['/signin-page'], { queryParams: { returnUrl: '/product-page/' + this.product.id } });
  }
}
