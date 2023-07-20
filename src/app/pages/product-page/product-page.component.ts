import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    // console.log(this.links)
  }



  ngAfterViewInit(): void {
    window.scrollTo(0, 0)
  }

  findProduct(id: string) {
    this.productService.getProductById(id).subscribe((data: any) => {
      this.product = data;
      let aux = data.categoria;
      this.links.push({ link: data.nome, nomeLink: data.nome });
      console.log(this.links);
      console.log()
      while (aux.categoria != null) {
        this.links.push({ link: aux.nome, nomeLink: aux.nome });
        aux = aux.categoria;
      }
      this.links.push({ link: "/home-page", nomeLink: "Home" });
      this.links.reverse();
      
    },
      (error) => {
        console.error(error);
        this.router.navigate(['/home-page']);
      });
  }

  links: PathBar[] = [];

  product: Product = {
    id: 0,
    nome: "Não encontrado",
    urlImagem: "https://www.cbvj.org.br/index/wp-content/uploads/2017/07/default.png",
    descricao: "Algo deu errado, tente novamente mais tarde",
    categoriaId: 0,
    especificacoes: [],
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
      this.webSocket.sendMessage(this.product.id, this.questionText);
    } else {
      this.usuarioDeslogado();
    }
  }

  buscarComentarios(id: string) {
    this.productService.getProductQuestions(id, this.currentPageComment).subscribe((data: any) => {
      const questions: Question[] = data.content[0].perguntas;
      this.product.listaDeComentarios = questions;
      this.lastQuestion = data.last
    });
  }

  favoritar() {
    if (this.usuarioLogado) {
      this.webSocket.subscribeToTopic(this.product.id, this.funcaoRetorno.bind(this));
    } else {
      this.usuarioDeslogado();
    }
  }

  usuarioDeslogado() {
    this.router.navigate(['/signin-page'], { queryParams: { returnUrl: '/product-page/' + this.product.id } });
  }

  funcaoRetorno(message?: IMessage) {
    if (message.headers['content-type'] === 'application/json') {
      const jsonData = JSON.parse(message.body);
      // console.log(jsonData);
    }
    this.currentPageComment = 0;
    this.buscarComentarios(this.product.id.toString());
  }

}
