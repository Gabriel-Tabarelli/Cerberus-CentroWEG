import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { IMessage } from '@stomp/stompjs';
import { PathBar } from 'src/app/interfaces/PathBar';
import { Product } from 'src/app/interfaces/Product/Product';
import { Question } from 'src/app/interfaces/Question';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';
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
    private webSocket: WebSocketService,
    private _snackBar: MatSnackBar,
    private sessionService: SessionStorageService) { }

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

  findProduct(id: string) {
    this.productService.getProductById(id).subscribe((data: any) => {
      this.product = data;
      let aux = data.categoria;
      this.links.push({ link: data.nome, nomeLink: data.nome });
      while (aux.categoria != null) {
        this.links.push({ link: "/category-page/" + aux.nome, nomeLink: aux.nome });
        aux = aux.categoria;
      }
      this.links.push({ link: "/home-page", nomeLink: "Home" });
      this.links.reverse();
      this.buscarComentarios(id);
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
  showMoreLess: string[] = [""];

  answersList: string[] = [""]

  includesInCart(): boolean {
    return this.cartService.includesInCart(this.product);
  }

  nextPageComment() {
    this.currentPageComment++;
    this.buscarComentarios(this.product.id.toString());
  }

  showAnswers(comment: number) {
    const index = this.answersVisibles.indexOf(comment);
    if (index === -1) {
      this.answersVisibles.push(comment);
      this.showMoreLess[comment - 1] = "Mostrar menos";
    } else {
      this.answersVisibles.splice(index, 1);
      this.showMoreLess[comment - 1] = "Mostrar mais";
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
      if (!this.includesInCart()) {
        this.cartService.addToCart(this.product)
      } else {
        this._snackBar.open('Produto já adicionado', 'Fechar', {
          horizontalPosition: 'end',
          verticalPosition: 'top',
        });
        setTimeout(() => {
          this._snackBar.dismiss();
        }, 3000);
      }
    } else {
      this.usuarioDeslogado();
    }
  }

  toComment() {
    if (this.usuarioLogado) {
      if (this.questionText.length > 0) {
        this.webSocket.sendMessage(
          this.sessionService.getItem("usuario").id,
          this.product.id,
          this.questionText);
        this.questionText = "";
        this._snackBar.open('Comentário enviado', 'Fechar', {
          horizontalPosition: 'end',
          verticalPosition: 'top',
        });
        setTimeout(() => {
          this._snackBar.dismiss();
          this.currentPageComment = 0;
          this.product.listaDeComentarios = [];
          this.buscarComentarios(this.product.id.toString());
        }, 3000);
      } else {
        this._snackBar.open('Comentário não pode estar vazio', 'Fechar', {
          horizontalPosition: 'end',
          verticalPosition: 'top',
        });
        setTimeout(() => {
          this._snackBar.dismiss();
        }, 3000);
      }
    } else {
      this.usuarioDeslogado();
    }
  }

  buscarComentarios(id: string) {
    this.productService.getProductQuestions(id, this.currentPageComment).subscribe((data: any) => {
      const questions: Question[] = data.content;
      console.log(questions)
      if (!this.product.listaDeComentarios) {
        this.product.listaDeComentarios = [];
      }

      this.product.listaDeComentarios.push(...questions);
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
    }
    this.currentPageComment = 0;
    this.buscarComentarios(this.product.id.toString());
  }

  toAnswer(comment: Question) {
    const id = comment.id;
    console.log();
    this.webSocket.answerMessage(id, this.answersList[id - 1], comment.perguntador.id);
    this.answersList[id - 1] = ""
  }


  scrollToResposta(index: number) {
    this.showAnswers(index);
    if (this.answersVisibles.includes(index)) {
      setTimeout(() => {
        this.scrollIntoView(index);
      }, 300);
    }
  }

  scrollIntoView(index: number) {
    const elementId = 'resposta' + (index - 1);
    const textId = 'textarea' + (index - 1);
    const element = document.getElementById(elementId);
    const text = document.getElementById(textId)
    if (element && text) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => {
        text.focus();
      }, 500);
    }
  }
}
