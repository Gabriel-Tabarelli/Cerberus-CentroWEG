import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/Product/Product';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { UserService } from 'src/app/services/user.service';
import { Notificacao } from 'src/app/interfaces/Notificacao';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(private sessionService: SessionStorageService,
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute,
    private requestService: RequestService) { }


  ngOnInit(): void {
    this.usuario = this.sessionService.getItem('usuario');
    this.userName = this.usuario.nome
    this.userService.getEnderecoProjection(this.usuario.id).subscribe((data) => {
      this.endereco = data.endereco;
      console.log(this.endereco)
    })
    this.telefone = "(" + this.usuario.telefone[0] + this.usuario.telefone[1] + ") "
    for (let i = 2; i < this.usuario.telefone.length; i++) {
      this.telefone += this.usuario.telefone[i]
    }

    this.userService.getNotificationsByUserIdNotVisualized(this.usuario.id).subscribe(notifications => {
      this.notifications = notifications.notificacoes;
      console.log(notifications.notificacoes[0])
    })

    this.requestService.findSomeRequest(this.usuario.id, 0, "desc").subscribe((data: any) => {
      this.listaDePedidos = data.content;
      console.log(data.content)
    })
  }

  @ViewChild('notificacao') notificacaoElement: ElementRef;
  @ViewChild('pedidos') pedidosElement: ElementRef;

  notifications: Notificacao[];

  ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment === 'notificacao') {
        setTimeout(() => {
          this.scrollToElement(this.notificacaoElement.nativeElement);
        }, 100);
      }
      if (fragment === 'pedidos') {
        setTimeout(() => {
          this.scrollToElement(this.pedidosElement.nativeElement);
        }, 100);
      }

    });
  }

  private scrollToElement(element: any): void {
    element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
  }

  userName: string = '';
  usuario: any = {}
  endereco: any = {}
  telefone: string;


  listaDePedidos: any[] = []

  listaDeProdutos: Product[] = []

  notificacaoVisualizar(idProduto: number): void {
    const rotaProduto = "/product-page/" + idProduto
    this.router.navigate([rotaProduto], { fragment: "pergunta" })
  }

  notificacaoChecar(idNotificacao: number): void {
    this.userService.visualizeNotification(idNotificacao).subscribe()
    this.notifications.forEach((notification) => {
      if (notification.id == idNotificacao) {
        notification.visualizada = true;
      }
    })
  }

  notificacaoMostrarMais(): void {
    this.userService.getNotificationsByUserIdVisualized(this.usuario.id).subscribe(notifications => {
      notifications.notificacoes.forEach((notification) => {
        this.notifications.push(notification)
      })
    })
  }
}
