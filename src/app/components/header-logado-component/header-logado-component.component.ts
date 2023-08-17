import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { IMessage } from '@stomp/stompjs';
import { take } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { UserStatusService } from 'src/app/services/user-state.service';
import { UserService } from 'src/app/services/user.service';
import { WebSocketService } from 'src/app/services/web-socket/web-socket.service';

@Component({
  selector: 'app-header-logado-component',
  templateUrl: './header-logado-component.component.html',
  styleUrls: ['./header-logado-component.component.css']
})
export class HeaderLogadoComponentComponent implements OnInit {

  pesquisa: any = '';
  notificationBoolean: boolean;

  constructor(private renderer: Renderer2,
    private sessionService: SessionStorageService,
    private userStatusService: UserStatusService,
    private router: Router,
    private cartService: CartService,
    private userService: UserService,
    private webSocket: WebSocketService) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(cart => {
      this.quantidadeProdutos = cart?.produtos?.length ?? 0;
    });

    this.webSocket.notification$.subscribe(notification => {
      this.notificationBoolean = !notification; // POR ALGUM MOTIVO NÃO ENTRA AQUI MESMO QUE DE O NEXT 
      console.log(notification, "sdfljsdfjklfsdkldfsjklsdfjklfdskljsdf")
    })
    
    const id = this.sessionService.getItem("usuario").id
    
    this.userService.existNotifications(id).subscribe(boolean => {
      this.notificationBoolean = !boolean;
      console.log(boolean)
    })

    this.webSocket.initializeWebSocketConnection(id); 

  }

  quantidadeProdutos: number = 0;
  isOpenCart: boolean = false;
  isOpenUser: boolean = false;

  cartShow() {
    this.isOpenCart = !this.isOpenCart;
    if (this.isOpenCart) {
      if (this.isOpenUser) {
        this.userShow();
      }
      this.renderer.addClass(document.body, 'no-scrollbar');
    } else {
      this.renderer.removeClass(document.body, 'no-scrollbar');
    }
  }

  userShow() {
    this.isOpenUser = !this.isOpenUser;
    if (this.isOpenUser) {
      this.renderer.addClass(document.body, 'no-scrollbar');
    } else {
      this.renderer.removeClass(document.body, 'no-scrollbar');
    }
  }

  deslogar() {
    this.sessionService.clear();
    this.userStatusService.setUserLoggedOut();
    this.userShow();
    this.router.navigate(['/']);
    this.cartService.cartDefault();
  }

  navegateTo(scroll: string) {
    this.userShow();
    this.router.navigate(['/profile-page'], { fragment: scroll });
  }

  onEnter(event: KeyboardEvent | Boolean) {
    if (event instanceof KeyboardEvent && event.key === "Enter") {
      this.router.navigate(['/search-page/' + (<HTMLInputElement>event.target).value]);
      (<HTMLInputElement>event.target).value = "";
      (<HTMLInputElement>event.target).blur()
    } else if (event == true) {
      this.router.navigate(['/search-page/' + this.pesquisa]);
      this.pesquisa = "";
    }
  }

}
