import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/Product/Product';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { UserService } from 'src/app/services/user.service';
import { Notificacao } from 'src/app/interfaces/Notificacao';
import { WebSocketService } from 'src/app/services/web-socket/web-socket.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(private sessionService: SessionStorageService,
    private router: Router,
    private userService: UserService,
    private webSocketService: WebSocketService,
    private route: ActivatedRoute) {}

  pageNotifications: number = -1;
  stateNotificacoes: string = "Mostrar mais";

  ngOnInit(): void {
    this.usuario = this.sessionService.getItem('usuario');
    this.userName = this.usuario.nome
    this.userService.getEnderecoProjection(this.usuario.id).subscribe((data) => {
      this.endereco = data.endereco;
      console.log(this.endereco)
    })
    this.webSocketService.notification$.subscribe((data) => {
      if (data) {
        this.stateNotificacoes = "Mostrar menos";
        this._buscar = false;
        this.buscarNotificacoes();
      } else {
        this._buscar = true;
      }
    })
    this.telefone = "(" + this.usuario.telefone[0] + this.usuario.telefone[1] + ") "
    for (let i = 2; i < this.usuario.telefone.length; i++) {
      this.telefone += this.usuario.telefone[i]
    }
    if (this._buscar) {
      this.buscarNotificacoes();
    }
  }

  ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment === 'notificacao') {
        this.scrollToElement(this.notificacaoElement.nativeElement);
      }
    });
  }

  @ViewChild('notificacao') notificacaoElement: ElementRef;

  notifications: Notificacao[] = [];
  private _buscar: boolean = false;

  private scrollToElement(element: any): void {
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

  userName: string = '';
  usuario: any = {}
  endereco: any = {}
  telefone: string;

  listaDePedidos: any[] = [
    {
      id: 23233,
      data: '01/01/2021',
      status: 'Aguardando Pagamento'
    },
    {
      id: 14353,
      data: '01/01/2021',
      status: 'Aguardando Pagamento'
    },
    {
      id: 11213,
      data: '01/01/2021',
      status: 'Aguardando Pagamento'
    }
  ]

  listaDeProdutos: Product[] = []

  notificacaoVisualizar(idProduto: number): void {
    const rotaProduto = "/product-page/" + idProduto
    this.router.navigate([rotaProduto], { fragment: "pergunta" })
  }

  notificacaoChecar(idNotificacao: number): void {
    this.userService.visualizeNotification(idNotificacao).subscribe(() => {
      this.userService.existNotifications(this.usuario.id).subscribe((data) => {
        if (data === 0) {
          this.webSocketService.nextNotification(false);
        }
      })
    })
    this.notifications.forEach((notification) => {
      if (notification.id == idNotificacao) {
        notification.visualizada = true;
      }
    })
  }

  buscarNotificacoes(): void {
    if (this.stateNotificacoes == "Mostrar mais") this.pageNotifications++;
    else {
      this.pageNotifications = 1;
      this.notifications = [];
    }
    this.userService.getNotificationsByUserId(this.usuario.id, this.pageNotifications).subscribe(notifications => {
      this.notifications = this.notifications.concat(notifications.content);
      if (!notifications.last) {
        this.stateNotificacoes = "Mostrar mais"
      } else if (notifications.last && this.notifications.length > 5) {
        this.stateNotificacoes = "Mostar menos"
      } else {
        this.stateNotificacoes = ""
      }
    })
  }

}
